# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License

from diagrams import Diagram, Cluster
from diagrams.k8s.network import Ingress, Service
from diagrams.k8s.compute import ReplicaSet, Deployment, Pod

with Diagram("Kubernetes Diagram", show=False, direction="TB"):
    ingress = Ingress("hutech.dev.com")

    with Cluster("UI Namespace"):
        ui_services = Service("ui_services")
        with Cluster("UI Pods"):
            ui_pods = [Pod("ui_pod1"), Pod("ui_pod2"), Pod("ui_pod3")]
            ui_services >> ui_pods << ReplicaSet("ui_daemon") << Deployment("ui_deployment")

    with Cluster("Chat Namespace"):
        chat_services = Service("chat_services")

    with Cluster("Auth Namespace"):
        auth_services = Service("auth_services")

    with Cluster("Search Namespace"):
        search_services = Service("search_services")

    with Cluster("Law Namespace"):
        law_services = Service("law_services")

    ingress >> ui_services >> [chat_services, auth_services, search_services, law_services]
