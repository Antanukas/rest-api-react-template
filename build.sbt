import play.sbt.PlayImport.PlayKeys.playRunHooks

name := """rest-api-react-template"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.7"

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  javaWs
)

playRunHooks <+= baseDirectory.map(Webpack.apply)
