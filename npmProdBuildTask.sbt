lazy val npmProdBuild = TaskKey[Unit]("Run Node prodBuild task")

def runNpmProdBuild(file: File) = {
  Process("npm run prodBuild", file) !
}

npmProdBuild := {
  if(runNpmProdBuild(baseDirectory.value) != 0) throw new Exception("Something goes wrong when running NM.")
}

dist <<= dist dependsOn npmProdBuild

stage <<= stage dependsOn npmProdBuild

test <<= (test in Test) dependsOn npmProdBuild