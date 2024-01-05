# Copyright (c) 2023-present Hutech University. All rights reserved
# Licensed under the MIT License

from diagrams.aws.security import WAF
from diagrams import Diagram, Cluster
from diagrams.aws.compute import EKS, ECS
from diagrams.aws.network import Route53, ALB

with Diagram("Clustered Web Services", show=False):
    dns = Route53("dns")
    lb = ALB("lb")
    waf = WAF("waf")

    with Cluster("Services"):
        svc_group = [
          EKS("chat_svc"),
          EKS("auth_svc"),
          EKS("search_svc"),
          EKS("law_svc")
        ]

    web = ECS("website")

    web >> dns >> lb >> waf >> svc_group
