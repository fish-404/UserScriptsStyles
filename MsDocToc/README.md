# MsDosToc

Sticky Microsoft Docs right sidebar toc block. 

## Features & Usage

You can choose install styles [![Install directly with Stylus](https://img.shields.io/badge/Install%20directly%20with-Stylus-00adad.svg)](https://raw.githubusercontent.com/fish-404/UserScriptsStyles/main/MsDocToc/Styles/StylesMsDocToc.user.css)  or scripts [![Install directly with Tampermonkey](https://img.shields.io/badge/Install%20directly%20with-Tampermonkey-blue)](https://raw.githubusercontent.com/fish-404/UserScriptsStyles/main/MsDocToc/Scripts/ScriptsForMsDocToc.user.js).

> Stylus browser extension is available for Chrome, Firefox and Opera browsers.

> Tampermonkey is available for Chrome, Microsoft Edge, Safari, Opera Next, and Firefox. 

* Sticky the toc
* Scroll the toc when the toc is long (e.g. [Visual Studio 2017 15.9 Release Notes|Microsoft Docs](https://docs.microsoft.com/en-us/visualstudio/releasenotes/vs2017-relnotes))
* Click "Show More" default (only support when you install by scripts)
* Add "+"(Add Collection) button to TOC (only support wehn you install by scripts)

![Preview](https://user-images.githubusercontent.com/29678177/190381970-4b0aeb5c-ed38-4154-9866-2363c226497b.png)

## Background

I often need to search Microsoft Docs for refernce, like C# API, SQL functions... 

I find these docs sticky the left sidebar but will scroll the right sidebar. That often make me anoyed when I read long docs like this one: [DELETE (Transact-SQL)-SQL Server|Microsoft Docs](https://docs.microsoft.com/en-us/sql/t-sql/statements/delete-transact-sql?redirectedfrom=MSDN&view=sql-server-ver15). When you read examples, you must to scoll to top to fetch the toc. I find an [issue](https://github.com/dotnet/docs/issues/1008) has pointed this improvement suggestion about 6 years ago, but it seems not be deployed now. 

![Screenshot when you read docs at front part](https://user-images.githubusercontent.com/29678177/168422628-25b36128-16bf-45f8-a41a-98e7cc791adc.png)

![Screenshot when you read docs at behind part](https://user-images.githubusercontent.com/29678177/168422685-adf72a12-768b-4bcd-ad7f-06094c9e8add.png)

I write some simple lines to make it sticky.

Then I find I usually need to show more default, so script also click default.

When I read some topic which I am not familier, I may need to read something about the article then decide save to collection or not. In this case, go to top everytime is annoyed, so I write a statement in script to move the button to the TOC block.


