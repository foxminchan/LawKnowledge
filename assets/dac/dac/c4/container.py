# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License

from diagrams import Diagram
from diagrams.c4 import Person, SystemBoundary, Container, Database, System, Relationship

graph_attr = {
    "splines": "spline",
}

with Diagram("Component diagram for law knowledge", graph_attr=graph_attr, show=False):
    citizen = Person(name="Citizen", description="A citizen of the country")

    with SystemBoundary("Law Knowledge System"):
        webapp = Container(
            name="Webapp", description="A web application that provides knowledge about the law"
        )

        api = Container(
            name="API", description="An API that provides knowledge about the law"
        )

        db = Database(
            name="Database", description="A database that stores knowledge about the law"
        )

    mainframe = System(
      name="Mainframe", description="A system that provides the main functions of the application", external=True
    )

    citizen >> Relationship("Look up the law [HTTPS]") >> webapp
    webapp >> Relationship("Provide the law [JSON/HTTPS]") >> api
    api >> Relationship("Query the law [SQL/TCP]") >> db
    api >> Relationship("Provide the law [JSON/HTTPS]") >> mainframe
