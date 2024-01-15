# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License

from diagrams import Diagram
from diagrams.c4 import Person, System, Relationship, Container

graph_attr = {
    "splines": "spline",
}

with Diagram("Context diagram for law knowledge", graph_attr=graph_attr, show=False, direction="TB"):
    citizen = Person(name="Citizen", description="A citizen of the country")

    law_knowledge_system = Container(
        name="Law Knowledge System", description="A system that provides knowledge about the law"
    )

    mainframe = System(
      name="Mainframe", description="A system that provides the main functions of the application", external=True
    )

    citizen >> Relationship("Look up the law") >> law_knowledge_system
    law_knowledge_system >> Relationship("Provide the law") >> mainframe
