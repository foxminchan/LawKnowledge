# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License

from diagrams import Diagram
from diagrams.c4 import Container, SystemBoundary, Relationship, Database

graph_attr = {
    "splines": "spline",
}

with Diagram("Component diagram for law knowledge", graph_attr=graph_attr, show=False):
    webapp = Container(
      name="Webapp", description="A web application that provides knowledge about the law"
    )

    with SystemBoundary("API Application [API Layer]"):
        auth = Container(
            name="Authentication", description="An authentication service"
        )

        search = Container(
            name="Search", description="A search service"
        )

        law = Container(
            name="Law", description="A law service"
        )

        chat = Container(
            name="Chat", description="A chat service"
        )

        chat >> Relationship("Uses") >> law
        search >> Relationship("Uses") >> law

    with SystemBoundary("Database [Data Layer]"):
        auth_db = Database(
            name="Authentication Database", description="A database that stores authentication information"
        )

        search_db = Database(
            name="Search Database", description="A database that stores search information"
        )

        law_db = Database(
            name="Law Database", description="A database that stores law information"
        )

        chat_db = Database(
            name="Chat Database", description="A database that stores chat information"
        )

    auth >> Relationship("Reads from and writes to") >> auth_db
    search >> Relationship("Queries") >> search_db
    law >> Relationship("Reads from and writes to") >> law_db
    chat >> Relationship("Reads from and writes to") >> chat_db
    webapp >> Relationship("Uses") >> auth
    webapp >> Relationship("Uses") >> search
    webapp >> Relationship("Uses") >> law
    webapp >> Relationship("Uses") >> chat
