ALTER TABLE `tarea`
  ADD CONSTRAINT `fk_tarea_etapa` FOREIGN KEY (`id_etapa`) REFERENCES `etapa` (`id_etapa`),
  ADD CONSTRAINT `fk_tarea_creador` FOREIGN KEY (`creado_por_ta`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `fk_tarea_asignado` FOREIGN KEY (`usuario_asigando`) REFERENCES `usuario` (`id_usuario`);
