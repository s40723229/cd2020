var tipuesearch = {"pages": [{'title': 'CD2020', 'text': 'week1~week5 \n week6~week9 \n week10~week14 \n 倉儲: https://github.com/s40723229/cd2020 \n 分組網站: https://s40723246.github.io/cd2020-bg1/content/index.html \n', 'tags': '', 'url': 'CD2020.html'}, {'title': 'weeks', 'text': '', 'tags': '', 'url': 'weeks.html'}, {'title': 'week1~week5', 'text': 'week1 \n 1.創建新的倉儲名稱為cd2020 \n 2.把倉儲git clone到自己的隨身碟 \n 3..架設起cd2020的網站， \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容建立網站 \n week2 \n 1.把隨身系統的版本更新 \n 2. 建一個新的資料夾為cd20，在cd20底下新增data，在data 底下 新增py382 \n 下載python3.8.2的版本到隨身碟中" Windows x86-64 executable installer "\xa0 \n 3.設定新的start.bat及stop.bat \n start.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n 15 \n 16 \n 17 \n 18 \n 19 \n 20 \n 21 \n 22 \n 23 \n 24 \n 25 \n 26 \n 27 \n 28 \n 29 \n 30 \n 31 \n 32 \n 33 \n 34 \n 35 \n 36 \n 37 \n \n \n \n @echo   off \n set   Disk = y \n subst  % Disk % :  "data" \n \xa0 \xa0 \n % Disk % : \n \xa0 \xa0 \n set   HomePath = % Disk % :\\home \n set   HomeDrive = % Disk % :\\home \n set   Home = % Disk % :\\home \n set   USERPROFILE = % Disk % :\\home \n \xa0 \xa0 \n REM 將系統 Python 程式的 io 設為 utf - 8 \n set   PYTHONIOENCODING = "utf-8" \n \xa0 \xa0 \n #REM for putty \n #Set GIT_HOME=%CDisk%:\\portablegit\\bin\\ \n #Set GIT_SSH=%Disk%:\\putty\\plink.exe \n \xa0 \xa0 \n set   PYTHONPATH = % Disk % :\\py382\\DLLs; % Disk % :\\py382\\Lib; % Disk % :\\py382\\Lib\\site - packages; \n set   PYTHONHOME = % Disk % :\\py382 \n \xa0 \xa0 \n set   path_python = % Disk % :\\py382; % Disk % :\\py382\\Scripts; \n set   path_msys2 = % Disk % :\\msys64\\mingw64\\ bin ; \n set   path_git = % Disk % :\\portablegit\\ bin ; \n set   path_tcc = % Disk % :\\tcc; \n \xa0 \xa0 \n path = % Disk % :; % path_python % ; % path_msys2 % ; % path_git % ; % path_tcc % ; \n \xa0 \xa0 \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n start  / MIN   cmd.exe \n \xa0 \xa0 \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n start  / MIN   % Disk % :\\wscite432\\wscite\\SciTE.exe \n \xa0 \xa0 \n Exit \n \n \n \n \n \n \n \n stop.bat: \n \n \n \n \n \n \n 1 \n 2 \n 3 \n 4 \n 5 \n 6 \n 7 \n 8 \n 9 \n 10 \n 11 \n 12 \n 13 \n 14 \n \n \n \n @echo   off \n set   Disk = y \n path = % PATH % ; \n \xa0 \xa0 \n taskkill  / IM python.exe  / F \n taskkill  / IM pythonw.exe  / F \n taskkill  / IM scite.exe  / F \n \xa0 \xa0 \n REM 終止虛擬硬碟與目錄的對應 \n subst  % Disk % :  / D \n REM 關閉 cmd 指令視窗 \n taskkill  / IM cmd.exe  / F \n \xa0 \xa0 \n EXIT \n \n \n \n \n \n 4.剩下的東西可以複製舊的隨身系統 \n 5.重啟系統後執行 \n \n \n \n \n \n \n 1 \n \n \n \n python get - pip.py \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n 1 \n \n \n \n pip install flask bs4 lxml pelican markdown flask_cors leo \n \n \n \n \n \n week3 \n \n \n 1.以作業分成小組分工進行， 分出的小組選出小組長 \n 2.直播的開會內容整理後做出pdf檔，放入倉儲 \n 3..課堂抽點報告以網站的reveal報告 \n 4.創建cd2020bg1的倉儲 \n 以下是抽點的報告影片 \n \n week4 \n 完成assignment1 \n \n', 'tags': '', 'url': 'week1~week5.html'}, {'title': 'week6~week9', 'text': 'week6 \n 1.利用OBS與Webcambcam進行錄影或直播開會時使用 \n 2.之後錄製影片必須有攝影畫面 \n 3.分配這周的作業並完成 \n 抽點報告影片 \n \n week7 \n 1.使用google meet和youtube直播進行第一次遠距教學 \n 2.由每組的組長與老師進行meet通訊其他組員觀看直播內容 \n 3.完成上次分工內容 \n 資料 \n 通過協同設計創造更好的產品-心態，工具，過程 \n 今日的數位產品比以往都更加複雜。創建它們需要多個團隊， 成員，每個成員都有自己的一套技能和專業知識。以我們的客戶Savvy為例， 與以下人員有緊密合作：產品經理，UX設計人員，視覺設計師，開發人員，產品 顧問和行銷人員。 \n 我們使用協同設計來處理這種複雜的工作。並且正確完成，協同設計可幫助 每個專家都有共同的心態，流程和工具，更快共同建立更好的產品， \n 我們編寫了此資源以幫助其他應用程式創建者採用協同設計文化和流程。 學習為什麼協同設計對於創造引人注目的產品以及經驗很重要。 我們還將深入探討協同設計的心態和文化、工具的要素， 進行有效的協同設計，以及實際工作中的協同設計的例子。 \n 什麼是協同"設計" \n 在進入正題之前，我們需要同時了解什麼是協同設計以及什麼不是。 簡單來說，協同設計就是在設計優先的環境中進行協作。 但由於設計的本質，特別是我們在Savvy所做的設計，設計協作趨向於 超越人們通常認為的協作。 \n 通常將協作定義為兩個或兩個以上的人共同完成一項任務 為了實現共同的目標，協同設計甚至包含更多。 \n 協同設計包括更多不同技術，艱鉅挑戰和更大規模的人員，這些都對目標 具有深遠的影響。 \n 您可能將協作視為兩個人用心在一個藝術品上。它只需要溝通、團隊合作同心協力。 協同設計是指一組策展人精心設計訪問者的體驗。 他們選擇藝術品，選擇在何處以及如何懸掛藝術品， 它所居住的房間（以及房間的照明，家具），甚至前面的房間和建築物同整為一個藝術品 \n 為什麼協同設計很重要 \n 你可以在沒有協作的情況下設計產品，但是需要一個協同設計過程才能完成 好的產品。這就是協同設計如此重要的原因。 \n 我們不僅為客戶構建應用程序。Savvy構建了複雜的多平台體驗和內部系統， 甚至在某些情況下還包括整個品牌和業務。為此，我們為了利用專業知識 跨足多個核心項目：策畫、設計、開發和行銷。每個項目都涉及了各成員各自的技能和專長。 \n 協同設計將這些思想融合在一起，將他們各自的專業知識結合在一起創建解決方案， 以解決共同目標的所有方面。而不是以一個人遇到問題角度來看， 協同設計將這個問題擺在所有專家面前，迫使他們考慮新觀點和可能性。 \n 例如，我們在設計過程的早期就讓我們的開發人員參與進來，以確保我們能盡快解決技術問題的機會和局限性。 這使我們可以利用並提升我們的技術能力，同時進一步消除在處理程序成本高昂的障礙。 它還限制了一個人可以單獨處理工作的可能，從而使工作保持公開狀態並強調用戶需求和產品目標。 \n 培養協同設計心態 \n 在設計過程中建立有效的協同時，正確的思維方式有好的幫助。 它訂定了誰進行協作並如何進行以及達到何種目的的準則。 \n 與每個人合作 \n 設計師有時會認為不是設計師的人沒有資格提供良好的產品反饋。 但是出色的設計不只是視覺效果。它涵蓋了有關產品的所有內容，從它的品牌、工程技術及其成長 \n 協同設計包含許多人，每個人都有自己的觀點和優勢。它給大家一個發聲的平台。 這些新鮮的觀點為設計師提供了更多信息。觀點使設計師能夠對其他設計有永久影響去選擇做出正確的開發和營銷選擇。 \n 與客戶的協作與與其他設計師和團隊成員的協同一樣重要。 在Savvy，我們讓客戶參與其產品的整個創作過程。我們花些時間來解釋選項，並與客戶進行討論以確保我們 了解他們的想法。 \n 這使我們能夠及早獲得客戶的認可，並從明確的起點和終點開始工作。 更大的曝光量並不是什麼大驚喜，第一次沒有人知道他們正在做什麼。 \n 客戶合作意味著無需花費高昂成本、後退和不必要的會議就能更快地獲得更完整的產品。 \n 設計很容易陷入角色而忽略全局。通過更早地參與更多的人與隊友建立更緊密的聯繫並共同承擔責任， 以及對產品成功的期待。這些能夠創建一個更加開放和透明的流程以及更緊密聯繫和投入的團隊。 \n 合作是持續性的 \n 客戶向我們提出了複雜的挑戰和目標。當然不用說，我們也繼續努力與我們的客戶進行長達數月甚至數年的交流， 並積累了過去的大量知識決策，研究和其他有價值的環境。 \n 通過採用上下文優先的方法，你可以確保每個人都處於最高知識水平。 這樣，他們就可以在產品上做出最明智的決定。 為了做到這一點，在Savvy 我們通過引入所有團隊成員儘早記錄和保存會議內容， 建立一些重疊的地方讓下一個團隊成員在過程就像客戶一樣。 \n 在個案協作的基礎上，上下文也同樣重要。請遵循以下準則以保持協作中的上下文優先： \n 在顯示你的工作之前提供脈絡。如果您正在工作，你的工作是否出現在螢幕上提供信息， 你可能因為這樣失去了聽眾的注意力。 \n 你必須描述您要解決的問題或要達到的目標。 \n 介紹與當前問題相關的工作。解釋你的想法以及為什麼要這麼做的某些決定。 \n 具體說明你要反饋的內容。 \n 合作是開放、誠實和無畏的 \n 將你的工作（自己）放在協同設計並不容易。情緒會阻礙提供開放和誠實的反饋， 尤其是當你擔心會傷害他人的感受時。 \n 在Savvy這並不意味著在協同中沒有情感的位置。感覺如何在設計中很重要。 我們為有情緒在決策中有情緒的人創建一個環境。因為離開談話可能會抹消潛在的想法或解決方案。 充其量，僅提供完整圍繞事實和數據進行務實的討論是沒有的。 在最壞的情況下，它可能是誤導或提供虛假的敘述。 \n 我們的團隊還相信，不要害怕提供反饋。這意味著了解需要解決的問題以及客戶的品牌和目標。 這也意味著要問很多提問以發現相關思想或幫助指導決策。 \n 嘗試以探索性和指導性的方式提出反饋意見，以建立並改善工作而不是拆散。 \n 您的反饋意見應具有建設性。與其說你不喜歡什麼，不如說反饋以指出您要幫助解決的問題。 在以下方面提供可行的步驟改善工作，或者至少改善你的思維背後的理由。 而且不要忘記表達你喜歡什麼以及為什麼。 \n 合作不僅僅是新的想法 \n 開放並接受協作反饋是一回事，解析這些想法是另一回事並將它們用作激發自己的催化劑。 這是一項一直不斷發展起來的能力。一種實踐方法是成為更好的聽眾。 \n 通常，在與他人交談時，我們會更多地考慮接下來要說的內容比起別人在說什麼，這會影響反饋過程 尤其是在設計中，因為我們在聽到其他意見或解決方案時通常都知道自己要說什麼。 \n 當您選擇先聆聽然後再做出反應時，它可以讓您完全理解反饋 有人在解說並讓你更深入他們使用的觀點是什麼和他們來自哪裡？ 很有可能這是你在創建過程。通過聽取接受並理解反饋的上下文和推理， 正在向更多的視角，思維方式和體驗方式開放你的設計。 然後，您可以針對挑戰目標和用例測試這些新觀點。你可以設計用於它們是否更適合用戶。 \n 當所有協作者都在積極聆聽時，更容易接受反饋。 最終，提供良好反饋的技能來自學習如何獲得反饋。當我們做一個 努力成為更好的聽眾，我們也發現自己變得更加謙虛，並成為更好設計師。 \n 尋找和使用正確的設計協同工具 \n 正確的工具在增強團隊的設計協同思維方面大有幫助。 在這部分，你會了解如何找尋協同工具。我們也會根據你的經驗適合的協同工具。 \n 選擇合適的工具 \n 有效的協同工具為協同者消除了所有障礙，使他們在工作上能夠快速輕鬆地連接與互動。 這將重點放在提供反饋上。它們還允許其他人在不破壞原始設計的情況下進行協同。 \n 過去，我們使用依賴於提供基本版本控制的工具，而不是真正的協同功能。 例如，設計人員將保存一個Sketch文件並將其上傳到Dropbox。 然後，另一個團隊成員將下載它，進行處理，然後重新上傳。文件在他人的手上時沒有簡單的方法進行更改。 我們嘗試了與Github類似的方法，實踐證明，該工具非常適合管理代碼庫，但在迭代設計工作中卻不那麼重要。 不用說，這些版本控制流程使我們的協同更加耗時、令人困惑，而且不合作性。 \n 但是現在我們根據協同類型從多種更高級的工具中進行選擇並想要實現。 \n FIGMA \n 這是一個協同優先的共享工作區工具。 Figma非常適合在其中有多個人設計文件的相同區域。 你可以同時觀看成員設計或在同一設計上一起工作。 \n 優點: \n Figma減少了個人在獨自一人工作的能力 \n 無需添加不必要的修飾或創建靜態的可傳送結果實現協同。所以你無需更改工作流程即可展示設計 。 \n 它可以輕鬆地在本機環境中查看並與之互動，並隨意進行調整。 \n 何時使用：文檔編輯，高保真原設計檔，即時協同和隨時改變的客戶想法， 通過一系列螢幕的內容來解釋並獲得有關設計方向的反饋。 \n MARVEL \n 雖然Figma傾向於感覺更自由和靈活，但Marvel允許更標準化的形式合作。 這也使我們的客戶可以輕鬆地與我們合作。 \n 優點: \n Marvel是一個更簡潔，更型式和專注的空間，非常適合與非設計合作團隊成員。 \n 它剔除了客戶需帳戶的支付或為了進行工作必需深入了解工具的所有需求。 \n 客戶可以下載視窗並通過Marvel在設備環境中查看它們的運行情況。 \n 使用時間：與客戶和開發人員一起呈現更多最終設計工作。 （學習比較Marvel與其他原型工具。） \n 其他協同工具 \n Zeplin是一個有用的傳遞工具，可讓開發人員深入了解設計工作的細節。。 （我們在這裡更深入地討論Zeplin。） \n Quip是集思廣益和產品/程式文件的絕佳平台。我們用它來記錄並組織團隊成員在一個專案 工作時需要了解的所有背景和知識。對於集思廣益而不是視覺關注的新想法也很有用。 \n 請注意，還有許多其他工具可以為協作增加類似的好處， 上面列出的，該列表代表了在我們日常工作中對我們有效的協同工具，並不表示所有選項都可能對您的團隊有效。 \n Savvy的程式設計在實踐中協同 \n 現在，讓我們採用上面概述的最佳實踐和工具，並展示它們在現實生活中如何組合在一起。 我們將使用Press Play中的實時繪圖體驗來演示設計協同的重要性。這項經驗涉及到 跨學科的團隊成員數量，包括視覺設計師、UX設計人員、開發人員、產品經理，當然還有客戶。 \n 脈絡與挑戰 \n Press Play是一個抽獎活動應用程序，可保存每日，每周和每月的圖紙。用戶獲得門票觀看廣告， 然後選擇五個表情符號輸入繪圖。然後根據他們的選擇如何與圖形的隨機選擇表情符號匹配。 這個特殊的任務有我們為正在等待現場繪畫結果的用戶創造了一個有趣而激動人心的現場體驗。 \n 對於我們來說，為這種體驗創建類似遊戲的動畫非常重要。我們特別想要 在用戶去看他們的屏幕時在螢幕上喚起一種嬉戲和期待感所選表情符號與抽獎活動附圖中的表情符號匹配。 \n 就是說，我們需要注意動畫所需的複雜程度及其影響在整個產品的時間表和成本上。 我們目標是將保真度提高到合理的時間，而不會顯著影響項目的預算。 \n 協同程式 \n 階段一:設計原型與集思廣益 \n 首先，一個Savvy 的UX設計師創建了Press Play的整體用戶體驗和設計原型， 確定了需要視窗畫面和每個視窗的時間安排。她還提出了一個粗略的概念，用於實時繪圖動畫， 根據客戶的需求和項目的已建立UX。 \n 她向產品經理和視覺設計師展示了是設計原型和粗糙的動畫。 然後，這三個人都與客戶會面，因此每個人都可以直接聽到反饋。 \n 第二階段：研究與脈絡 \n Savvy的視覺設計師負責創建實際的繪圖動畫帶來吸睛的感覺， 讓Press Play產品沒有太多先入為主的知識。為了快速裝訂，他與UX設計人員和產品經理進行了深入的交談。 他還致力於其他研究有時間了解整體產品目標，挑戰並熟悉工作。 至今。如前所述，他是設計原型演示的一部分並為客戶的反饋。 \n 在這種情況下，他進行了一些與手頭任務直接相關的其他研究。 通過這樣做，他確保自己了解現場繪畫體驗的要求，目標和挑戰。 他查看了具有類似經驗和保真度的其他應用，並參考了動畫， 以了解最終動畫到底需要顯示什麼（在這種情況下，表情符號和用戶的表情符號選擇）。 在過於束縛解決方案之前，他遇到了一個精明的人iOS開發人員了解技術限制和注意事項 \n 然後，我們的視覺設計師和UX設計師集思廣益，對視覺效果至關重要。他們 同意需要為用戶建立緩慢的提示以建立懸念/期望。 \n 階段3：反覆和反饋 \n 當我們的視覺設計師沿多個不同方向工作時，他選擇了UX設計師聊聊他在Figma中的進度和設計。 通過討論工作，他們激發了更多想法和迭代， 同時確保它們符合客戶期望。還有更多他手下有很多可靠的選擇， 他再次與iOS開發人員會面，以確保一切都在從技術角度出發。 \n 階段4：客戶的反饋和發展 \n 當我們找到更多，更最終的體驗版本時，視覺設計師走了通過他們與客戶一起使用Figma。  Press Play產品經理和UX設計師還提供了反饋和指導。 \n 一旦他們都了解了引起顧客興趣的東西，視覺設計師便開始最大限度地發揮作用。 視覺效果並使它們為開發做好準備。他繼續與iOS開發人員合作，在技術層面上充分利用該概念。 \n 最終結果 \n Press Play的實時繪圖動畫是工作中設計協作的一個示例。一隊跨學科專家一起解決更大的設計和開發挑戰含義。 沒有設計協作，我們將找不到理想的交集用戶體驗，視覺和技術。 \n 當客戶在他的應用程式中看到生動的動畫時，他稱其為“開創性”。 \n 而且，這種Press Play體驗的研究，合作和創造對我們有幫助 發現產品用戶旅程中的空白。最初，現場繪畫的目的是為了娛樂 向用戶顯示結果的方式。在設計過程中，我們意識到， 如果用戶不觀看實時繪圖，他們就會迷失方向，無法體驗終結繪製的用戶旅程。 \n 基於這一發現，我們決定在其他兩個地方也改進該應用程序。我們添加了一個獲勝者圈子的結果/實時繪圖元素， 以及用戶的輸贏歷史記錄部分應用程序的細節部分。 最後，設計協作使我們得以實現這一未實現的目標需要用戶體驗。 \n 結論說明 \n 設計協同的產品和經驗需要解決建築中伴隨的複雜、關鍵問題。 通過利用多個團隊成員的專業知識跨學科的設計協作可確保團隊從各個角度應對挑戰並尋求更好的解決方案。 借助正確的思維方式、工具和流程，進行設計協同使團隊能夠通過創造性思維和迭代來更深入。 \n 我們希望本指南為您提供良好的基礎，以便您可以構建自己的有效設計協同過程。 您可以在Savvy博客上了解有關設計和產品策略的更多信息，並隨時在Savvy Apps網站上與我們聯繫以尋求幫助。 \n week8 \n 為了實現遠端的四輪車遙控我們要先對 python remote api 進行設置 \n pip install numpy \n pip install imutils \n pip install opencv-python\xa0 \n 執行這三個程式把模組下載下來 \n week9 \n 期中考 \n 1. 所有學員, 透過個人行事曆建立 Google Handout Meet 會議, 展示個人桌面操作, 開放 live stream, 並錄製至少 10 分鐘的個人期中簡報影片, 說明個人於 W1-W8 所完成的相關內容 \n 2. 完成上述個人簡報錄製後, 將存於個人 Google Drive 中的期中簡報 mp4 影片, 以共享設置為所有登入\xa0 @gm \xa0 帳號的用戶都可以觀看 \n 3. 完成上述影片共享設置後, 請登入\xa0 @gm \xa0 個人帳號,  填寫表單並完成期中個人自評成績登錄 \n', 'tags': '', 'url': 'week6~week9.html'}, {'title': 'week10~week14', 'text': 'week10 \n 網站用戶gm用戶登入設置 \n 1.搜尋google api 切換成自己的學校gm帳號 \n 2.同意使用說明並建立專案(名稱自取) \n 3.git clone老師的cd2020pj1倉儲放到隨身系統的tmp中 \n 4.啟用api和服務，選定Google+Domains API \n 5.設定憑證，選內部更改應用程式名稱(名稱自取 ) \n 6.在憑證建立憑證選取"建立OAuth客戶端ID"，選擇應用程式的選項 \n 7.建立後會有客戶ID和密碼，複製成文字檔存在tmp下 \n 設定\xa0 \xa0授權的 javascript 來源； https://localhost:8443 \n \xa0 \xa0 \xa0 \xa0 \xa0 \xa0授權的重新導向url: https://localhost:8443/login/google/ \n 8.用leo開啟cd2020pj1 修改路徑 ，儲存後點darwROC \n config內的keyfile的檔案名稱改成自己剛儲存的文字檔 \n 9.執行 pip install authomatic 到cd2020pj1執行 python wsgi.py\xa0 \n 10.登入學校google帳號就可進入網站 \n \n \xa0week11 \n 虛擬主機設置 \n 1.下載vitualbox並下載老師設定好的 Ubuntu \n 2.開啟vitualbox並把老師的Ubuntu匯入 \n 3.把匯入的Ubuntu設定網路成僅限主機介面卡，之後啟動Ubuntu \n 4.密碼是kmol2020，把跳出的訊息關掉後點activities，點選LXTermial \n 5.進入互動視窗後輸入xterm&，再用ls顯示資料 \n 6.cd coppeliasim4_rev4 >cd CoppeliaSim_Edu_V4_0_0_Ubuntu18_04進入我們要的資料夾 \n 7. ./coppeliaSim.sh開啟v-rep這樣就能在虛擬主機開啟v- rep \n \n week12 \n IPv4 ubuntu對外連線 \n 1.ubuntu網路設定 NAT Network，新增網路埠號 \n \n 2.啟動虛擬主機，開啟LXTermial(密碼:kmol2020) \n 3.輸入ifconfig>sudo apt install net-tools (密碼:kmol 2020) \n 4.可用ping 127.0.0.1查看是否成功作動，cd cd2020pj1進入cd2020pj1，git pull 更新 \n 5.sudo vi wsgi.py 編輯內容，按i編輯將改近端host:10.0.2.4 \n 6.esc退出操作並輸入wq儲存更改，用leo開啟cd2020pj1，在Nav搜尋allowExt \n 7.輸入可新增ttt檔，然後 sudo vi ouath_scrum.txt \n 8.內容暫時輸入123，輸入python3 wsgi.py開啟遠端 \n 9.開啟https://127.0.0.1:8443/alogin網站連線 \n', 'tags': '', 'url': 'week10~week14.html'}]};