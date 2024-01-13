pipeline {
    agent none

    environment {
        NX_BRANCH = env.BRANCH_NAME.replace('PR-', '')
    }

    stages {
        stage('Pipeline') {
            parallel {

                stage('Main') {
                    when {
                        branch 'main'
                    }
                    agent any
                    steps {
                        sh "pnpm install"
                        sh "npx nx-cloud start-ci-run --stop-agents-after='build'"
                        sh "npx nx format:check"
                        sh "npx nx affected --base=HEAD~1 -t lint --parallel=3 & npx nx affected --base=HEAD~1 -t test --parallel=3 --configuration=ci & npx nx affected --base=HEAD~1 -t build --parallel=3"
                    }
                }

                stage('PR') {
                    when {
                        not { branch 'main' }
                    }
                    agent any
                    steps {
                        sh "pnpm install"
                        sh "npx nx-cloud start-ci-run --stop-agents-after='build'"
                        sh "npx nx format:check"
                        sh "npx nx affected --base origin/${env.CHANGE_TARGET} -t lint --parallel=2 & npx nx affected --base origin/${env.CHANGE_TARGET} -t test --parallel=2 --configuration=ci & npx nx affected --base origin/${env.CHANGE_TARGET} -t build --parallel=2"
                    }
                }

                stages {
                    stage('Agent1') {
                       agent any
                       steps {
                        sh "pnpm install"
                        sh "npx nx-cloud start-agent"
                       }
                    }

                    stage('Agent2') {
                       agent any
                       steps {
                        sh "pnpm install"
                        sh "npx nx-cloud start-agent"
                       }
                    }

                    stage('Agent3') {
                       agent any
                       steps {
                        sh "pnpm install"
                        sh "npx nx-cloud start-agent"
                       }
                    }
                }
            }
        }
    }

    stages {
        stage("build & SonarQube analysis") {
            environment {
                SCANNER_HOME = tool 'SonarQubeScanner'
            }

            steps {
                withSonarQubeEnv('SonarQube') {
                    sh "${SCANNER_HOME}/bin/sonar-scanner"
                }
            }
        }
    }

    stages {
        stage('Build Docker Images') {
            when {
                branch 'main'
            }
            agent any
            steps {
                sh "docker build -f apps/api/api-gateway/Dockerfile ${env.DOCKER_REGISTRY}/${env.DOCKER_USERNAME}/api-gateway:latest"
                sh "docker build -f apps/api/auth-svc/Dockerfile ${env.DOCKER_REGISTRY}/${env.DOCKER_USERNAME}/auth-svc:latest"
                sh "docker build -f apps/api/law-svc/Dockerfile ${env.DOCKER_REGISTRY}/${env.DOCKER_USERNAME}/law-svc:latest"
                sh "docker build -f apps/api/search-svc/Dockerfile ${env.DOCKER_REGISTRY}/${env.DOCKER_USERNAME}/search-svc:latest"
                sh "docker build -f apps/api/website/Dockerfile ${env.DOCKER_REGISTRY}/${env.DOCKER_USERNAME}/website:latest"
            }
        }
        stages('Login to Github container registry') {
            when {
                branch 'main'
            }
            agent any
            steps {
                withCredentials([usernamePassword(credentialsId: 'GITHUB_CREDENTIALS', passwordVariable: 'PASSWORD', usernameVariable: 'USERNAME')]) {
                    sh "docker login ghcr.io -u ${env.USERNAME} -p ${env.PASSWORD}"
                }
            }
        }
        stages('Push Docker Images') {
            when {
                branch 'main'
            }
            agent any
            steps {
                sh "docker push ${env.DOCKER_REGISTRY}/${env.DOCKER_USERNAME}/api-gateway:latest"
                sh "docker push ${env.DOCKER_REGISTRY}/${env.DOCKER_USERNAME}/auth-svc:latest"
                sh "docker push ${env.DOCKER_REGISTRY}/${env.DOCKER_USERNAME}/law-svc:latest"
                sh "docker push ${env.DOCKER_REGISTRY}/${env.DOCKER_USERNAME}/search-svc:latest"
                sh "docker push ${env.DOCKER_REGISTRY}/${env.DOCKER_USERNAME}/website:latest"
            }
        }
    }

    post {
        failure {
            mail to: 'nguyenxuannhan407@gmail.com',
            subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
            body: "Something is wrong with ${env.BUILD_URL}"
        }
    }
}
