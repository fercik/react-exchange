workflow "CI" {
  on = "push"
  resolves = ["TEST"]
}

action "NPM CI" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  args = "ci"
}

action "TEST" {
  uses = "actions/npm@59b64a598378f31e49cb76f27d6f3312b582f680"
  needs = ["NPM CI"]
  args = "test"
}
