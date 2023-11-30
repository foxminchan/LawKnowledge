from dependency_injector import containers


class Container(containers.DeclarativeContainer):
    wiring_config = containers.WiringConfiguration()
