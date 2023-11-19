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
                        sh "npm ci"
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
                        sh "npm ci"
                        sh "npx nx-cloud start-ci-run --stop-agents-after='build'"
                        sh "npx nx format:check"
                        sh "npx nx affected --base origin/${env.CHANGE_TARGET} -t lint --parallel=2 & npx nx affected --base origin/${env.CHANGE_TARGET} -t test --parallel=2 --configuration=ci & npx nx affected --base origin/${env.CHANGE_TARGET} -t build --parallel=2"
                    }
                }

                # Add as many agent you want
                stage('Agent1') {
                   agent any
                   steps {
                    sh "npm ci"
                    sh "npx nx-cloud start-agent"
                   }
                }
                stage('Agent2') {
                   agent any
                   steps {
                    sh "npm ci"
                    sh "npx nx-cloud start-agent"
                   }
                }
                stage('Agent3') {
                   agent any
                   steps {
                    sh "npm ci"
                    sh "npx nx-cloud start-agent"
                   }
                }
            }
        }
    }
}