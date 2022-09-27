# Feature

Add a badge icon to show the npm package forks info:
* If the package repo isn't forked from other repo, show the forks number
* If the package repo is forked from other repo, show this repo and its parent repo forks number
* If the package repo is not found, show status 404

 [![Install directly with Tampermonkey](https://badgen.net/badge/Install%20directly%20with/Tampermonkey/blue)](https://github.com/fish-404/UserScriptsStyles/raw/main/npm/Scripts/NpmPackageRepo.user.js)

![package repo isn't forked from other repo](https://user-images.githubusercontent.com/29678177/192420297-bffcfdb4-9714-47b7-9b55-2efd9169761c.png)

![package repo is fored from other repo](https://user-images.githubusercontent.com/29678177/192420512-8b61e053-0e6b-4737-af08-b2d4b254758f.png)

![package repo is not found](https://user-images.githubusercontent.com/29678177/192420638-9af7253b-1e95-45fb-98cd-41a1c26a816c.png)

# Note

To use this script, you need to allow cross-origin, Tampermonkey will pop a page like this:

![screenshot about cross-origin request](https://user-images.githubusercontent.com/29678177/192424268-3d2ab850-a35d-43b1-82c4-129a8ff46d63.png)

You can always remove or update the settings in script setting tab if you want.

![screenshot about change script setting](https://user-images.githubusercontent.com/29678177/192423187-5489f83e-2454-4ca9-907d-f5df38bc47e8.png)

# Limitation

According to Github API document[^1]:

> For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the person making requests.

# Known Issues to Fix

When you nagtive to other package from the search suggestion result as your current location is a package detail page, the badge will not changed. (Issue #8)

# Background

When I search npm packages, find some packages are forked from other repo, and doesn't put infomation to indicate but is pulished to public. I know some forks repo maybe add more featrue based on the original package, but I think is confused if there is nothing to indicate this and also doesn't respcet the original developer, since the packages published to npm and we can't see the info like we see the fork repo in Github. 


[^1]: [Rate Limiting from Resources in the REST API - Gihub Docs](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting)
