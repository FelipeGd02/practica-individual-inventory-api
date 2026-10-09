Petición	                                   Código
Crear Pen (office, stock 0)	                    201
Crear con stock -1	                            400
Crear con stock "3"	                            400
Crear mandando status	                        400
Cambiar solo el stock de Mouse a 0	            200
Actualizar con ID abc	                        400
Actualizar un ID que no existe	                404
Actualizar Keyboard	                            409
Consultar Keyboard después	                    200 (no cambió)
Buscar ?category=electronics&limit=2	        200
Buscar ?category=toys	                        400
Buscar ?limit=21	                            400

1: El 0 se acepta porque cae dentro del rango permitido que un producto no tenga unidades disponibles es algo normal. En cambio “3” llega como texto y no como número dado que el pipe no convierte automáticamente el body @IsInt() lo rechaza.

2: Lo permite @IsOptional(). Si el campo name no viene en la petición no hay problema pero si viene, se valida con las mismas reglas que en la creación debe ser texto, no puede estar vacío y tiene un máximo de 60 caracteres.

3: Porque el conflicto no está en los datos sino en el estado del producto. El pipe solo verifica que la entrada esté bien formada; que un producto inactivo no pueda editarse es una regla de negocio, y esa la aplica ProductRulesService devolviendo un 409.