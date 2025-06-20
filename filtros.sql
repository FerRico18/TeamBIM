--
-- Filtros para la tabla `tarea`
--
-- Filtros para la tabla `tarea`
ALTER TABLE `tarea`
  ADD CONSTRAINT `tarea_ibfk_1` FOREIGN KEY (`id_etapa`) REFERENCES `etapa` (`id_etapa`),
  ADD CONSTRAINT `tarea_ibfk_2` FOREIGN KEY (`creado_por_ta`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `tarea_ibfk_3` FOREIGN KEY (`usuario_asigando`) REFERENCES `usuario` (`id_usuario`);

-- Filtros para la tabla `usuario_proyecto`
ALTER TABLE `usuario_proyecto`
  ADD CONSTRAINT `usuario_proyecto_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `usuario_proyecto_ibfk_2` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`id_proyecto`);


--
-- Filtros para la tabla `version_modelo`
--
ALTER TABLE `version_modelo`
  ADD CONSTRAINT `version_modelo_ibfk_1` FOREIGN KEY (`id_modelo_bim`) REFERENCES `modelo_bim` (`id_modelo_bim`),
  ADD CONSTRAINT `version_modelo_ibfk_2` FOREIGN KEY (`cargado_por_v`) REFERENCES `usuario` (`id_usuario`);
COMMIT;
