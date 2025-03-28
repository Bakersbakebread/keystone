@ECHO OFF
:: This file can now be deleted!
:: It was used when setting up the package solution (using https://github.com/LottePitcher/opinionated-package-starter)

:: set up git
git init
git branch -M main
git remote add origin https://github.com/BakersBakeBread/keystone.git

:: ensure latest Umbraco templates used
dotnet new install Umbraco.Templates --force

:: use the umbraco-extension dotnet template to add the package project
cd src
dotnet new umbraco-extension -n "Keystone" --site-domain "https://localhost:44386" --include-example --allow-scripts Yes

:: replace package .csproj with the one from the template so has nuget info
cd Keystone
del Keystone.csproj
ren Keystone_nuget.csproj Keystone.csproj

:: add project to solution
cd..
dotnet sln add "Keystone"

:: add reference to project from test site
dotnet add "Keystone.TestSite/Keystone.TestSite.csproj" reference "Keystone/Keystone.csproj"
