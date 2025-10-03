const imagesSets = [
                ["benner/download.jpeg", "benner/images (1).jpeg", "benner/images (2).jpeg", "benner/images (3).jpeg"],
                ["benner/images (4).jpeg", "benner/images.jpeg", "benner/offer1.jpg", "benner/ok.jpg"],
                ["benner/a.jpeg", "benner/b.jpg", "benner/c.jpg", "benner/d.jpg"],
            ];
            const gradients = [
                "linear-gradient(120deg,#f6d365,#fda085,#a18cd1,#fbc2eb)",
                "linear-gradient(120deg,#f093fb,#f5576c,#ffd86f)",
                "linear-gradient(120deg,#84fab0,#8fd3f4,#a18cd1)",
                "linear-gradient(120deg,#c2e59c,#64b3f4,#fbc2eb)",
                "linear-gradient(120deg,#ff9a9e,#fecfef,#f6d365)"
            ];
            const animations = [
                { name: "rotY", timing: 12 },
                { name: "rotX", timing: 12 },
                { name: "rot3dTilt", timing: 14 },
                { name: "slowFloat", timing: 16 },
                { name: "spinScale", timing: 13 }
            ];

            const slide = document.getElementById("slide");
            const frame = document.getElementById("frame");
            const badge = document.getElementById("badge");
            const caption = document.getElementById("caption");
            let currentSet = 0;
            const imgs = () => document.querySelectorAll("#slide img");

            function applyRandomAnimation() {
                const pick = animations[Math.floor(Math.random() * animations.length)];
                slide.style.animation = `${pick.name} ${pick.timing}s infinite linear`;
            }
            function applyRandomBackground() {
                const g = gradients[Math.floor(Math.random() * gradients.length)];
                document.body.style.background = g;
                document.body.style.backgroundSize = "400% 400%";
            }
            function switchImageSet() {
                currentSet = (currentSet + 1) % imagesSets.length;
                const set = imagesSets[currentSet];
                const nodes = imgs();
                nodes.forEach((img, i) => {
                    img.style.opacity = 0;
                    setTimeout(() => {
                        img.src = set[i] || set[i % set.length];
                        img.style.opacity = 1;
                    }, 350);
                });
                applyRandomAnimation();
                applyRandomBackground();
                const offers = ["BIG SALE • FREE", "LIMITED OFFER • 50% OFF", "FLASH DEAL • TODAY", "BUY 1 GET 1"];
                badge.textContent = offers[Math.floor(Math.random() * offers.length)];
                caption.textContent = `Offer live — ${new Date().toLocaleTimeString()}`;
            }
            document.addEventListener("DOMContentLoaded", () => {
                applyRandomAnimation();
                applyRandomBackground();
                setInterval(switchImageSet, 12000);
                frame.addEventListener("click", switchImageSet);
            });

             document.addEventListener('DOMContentLoaded', () => {

    // Toggle Admin Panel
    const openAdminBtn = document.querySelector('#openAdmin');
    const adminPanel = document.querySelector('#adminPanelPopup');

    openAdminBtn.addEventListener('click', () => {
        if (adminPanel.style.display === 'none' || adminPanel.style.display === '') {
            adminPanel.style.display = 'block';
            window.scrollTo({ top: adminPanel.offsetTop - 50, behavior: 'smooth' });
            toast('Admin panel opened'); // optional, agar toast function hai
        } else {
            adminPanel.style.display = 'none';
        }
    });

   document.addEventListener('DOMContentLoaded', () => {

    // ------------------ PRODUCTS array load ------------------
    let PRODUCTS = JSON.parse(localStorage.getItem('products')) || [];

    // ------------------ Admin panel toggle ------------------
    document.querySelector('#openAdmin').addEventListener('click', () => {
        const panel = document.querySelector('#adminPanelPopup');
        if(panel.style.display === 'none' || panel.style.display === ''){
            panel.style.display = 'block';
            window.scrollTo({ top: panel.offsetTop - 50, behavior: 'smooth' });
            toast('Admin panel opened');
        } else {
            panel.style.display = 'none';
        }
    });

    // ------------------ Admin Add Product ------------------
    document.querySelector('#admAdd').addEventListener('click', () => {
        const name = document.querySelector('#admName').value.trim();
        const price = parseFloat(document.querySelector('#admPrice').value);
        const img = document.querySelector('#admImg').value.trim();
        const cat = document.querySelector('#admCat').value;

        if(!name || !price || !img){
            alert('Name, price, image required');
            return;
        }

        // Duplicate check
        const exists = PRODUCTS.some(p => p.name === name && p.price === price);
        if(exists){
            alert('Product already exists!');
            return;
        }

        const newId = 'p' + Date.now();
        const obj = { id: newId, name, price, cat, img, desc: name };

        PRODUCTS.unshift(obj);                   // Ek hi baar push
        localStorage.setItem('products', JSON.stringify(PRODUCTS)); // Save to localStorage
        applyFilters();                          // Filters apply
        renderFeatured();                        // Products render

        // Clear input fields
        document.querySelector('#admName').value = '';
        document.querySelector('#admPrice').value = '';
        document.querySelector('#admImg').value = '';

        toast('Product added locally');
    });

});

});


            /**************************************************************************
             * Big Frontend E-commerce Demo (single-file)
             * - products are stored in localStorage under key "apna_products_v1" when admin adds
             * - cart under "apna_cart_v1"
             * - wishlist under "apna_wish_v1"
             **************************************************************************/

            /* --------------------------- Sample product seed ------------------------- */
            // -------- Hero content + banner rotation --------
            const heroData = [
                {
                    heading: "Big Sale — Up to 60% off on fresh groceries",
                    para: "Fast local delivery • Fresh from farms • Cashback offers",
                    buttons: ["Shop Now", "Deals of the day"],
                    bg: "url('"
                },
                {
                    heading: "Fresh Fruits & Veggies — Buy 1 Get 1 Free",
                    para: "Daily fresh produce • Delivered to your door",
                    buttons: ["Order Now", "View Offers"],
                    bg: "url('"
                },
                {
                    heading: "Exclusive Snacks & Beverages Sale",
                    para: "Tasty treats • Great discounts • Limited time",
                    buttons: ["Grab Now", "Explore More"],
                    bg: "url('"
                },
                {
                    heading: "Organic & Healthy Products Up to 50% Off",
                    para: "Go green • Stay healthy • Shop smart",
                    buttons: ["Shop Organic", "Today's Deals"],
                    bg: "url('"
                }
            ];

            let heroIndex = 0;

            setInterval(() => {
                heroIndex = (heroIndex + 1) % heroData.length;

                const heroLeft = document.getElementById('heroLeft');
                heroLeft.style.background = heroData[heroIndex].bg;  // Change banner
                heroLeft.style.transition = "background 1s ease";

                // Update heading
                document.getElementById('heroHeading').innerText = heroData[heroIndex].heading;

                // Update paragraph
                document.getElementById('heroPara').innerText = heroData[heroIndex].para;

                // Update buttons
                const buttonsDiv = document.getElementById('heroButtons');
                buttonsDiv.innerHTML = "";
                heroData[heroIndex].buttons.forEach(text => {
                    const btn = document.createElement('button');
                    btn.innerText = text;
                    btn.className = text.includes("Deals") || text.includes("Explore") ? "btn btn-ghost" : "hero-cta";
                    buttonsDiv.appendChild(btn);
                });

            }, 4500); // 4.5 seconds

            const SAMPLE_PRODUCTS = [
                // ===== FRUITS (20) =====
                { id: "p1", name: "Apple (सेब) — 1kg", price: 120, cat: "fruits", img: "img/Apple (सेब).jpeg", desc: "Fresh red apples.ye postic jh " },
                { id: "p2", name: "Banana (केला) — dozen", price: 50, cat: "fruits", img: "img/Banana (केला).jpeg", desc: "Ripe yellow bananas." },
                { id: "p3", name: "Mango (आम) — 1kg", price: 120, cat: "fruits", img: "img/mango.png", desc: "Sweet Alphonso style mangoes." },
                { id: "p4", name: "Orange (संतरा) — 1kg", price: 50, cat: "fruits", img: "img/Orange (संतरा).jpg", desc: "Juicy oranges." },
                { id: "p5", name: "Strawberry — 250g", price: 120, cat: "fruits", img: "img/Strawberry.jpg", desc: "Fresh strawberries." },
                { id: "p6", name: "Grapes (अंगूर) — 1kg", price: 90, cat: "fruits", img: "img/Grapes (अंगूर).jpeg", desc: "Sweet grapes." },
                { id: "p7", name: "Papaya (पपीता) — 1kg", price: 60, cat: "fruits", img: "img/Papaya (पपीता).jpg", desc: "Ripe papaya." },
                { id: "p8", name: "Pineapple (अनानास) — 1 piece", price: 80, cat: "fruits", img: "img/Pineapple (अनानास).jpeg", desc: "Tropical pineapple." },
                { id: "p9", name: "Watermelon (तरबूज) — 1kg", price: 30, cat: "fruits", img: "img/Watermelon (तरबूज).jpeg", desc: "Juicy watermelon." },
                { id: "p10", name: "Kiwi — 1kg", price: 200, cat: "fruits", img: "img/Kiwi.jpeg", desc: "Fresh kiwi fruits." },
                { id: "p11", name: "Pomegranate (अनार) — 1kg", price: 150, cat: "fruits", img: "img/Pomegranate (अनार).jpeg", desc: "Fresh pomegranate." },
                { id: "p12", name: "Chikoo (चीकू) — 1kg", price: 70, cat: "fruits", img: "img/Chikoo (चीकू).jpeg", desc: "Sweet chikoo." },
                { id: "p13", name: "Plum (आलूबुखारा) — 1kg", price: 120, cat: "fruits", img: "img/Plum (आलूबुखारा).jpeg", desc: "Fresh plums." },
                { id: "p14", name: "Litchi (लीची) — 1kg", price: 180, cat: "fruits", img: "img/Litchi (लीची).jpeg", desc: "Sweet lychees." },
                { id: "p15", name: "Pear (नाशपाती) — 1kg", price: 150, cat: "fruits", img: "img/Pear (नाशपाती).jpeg", desc: "Fresh pears." },
                { id: "p16", name: "Guava (अमरूद) — 1kg", price: 60, cat: "fruits", img: "img/Guava (अमरूद).jpeg", desc: "Fresh guava." },
                { id: "p17", name: "Apricot (खुबानी) — 1kg", price: 200, cat: "fruits", img: "img/Apricot (खुबानी).jpeg", desc: "Sweet apricots." },
                { id: "p18", name: "Fig (अंजीर) — 1kg", price: 300, cat: "fruits", img: "img/Fig (अंजीर).jpeg", desc: "Fresh figs." },
                { id: "p19", name: "Coconut (नारियल) — 1 piece", price: 45, cat: "fruits", img: "img/Coconut (नारियल).jpeg", desc: "Fresh coconut." },
                { id: "p20", name: "Dates (खजूर) — 500g", price: 150, cat: "fruits", img: "img/Dates (खजूर).jpeg", desc: "Sweet dates." },
                { id: "p21", name: "Blueberry — 125g", price: 250, cat: "fruits", img: "img/Blueberry.jpeg", desc: "Fresh blueberries." },
                { id: "p22", name: "Blackberry — 125g", price: 220, cat: "fruits", img: "img/Blackcurrant.jpeg", desc: "Juicy blackberries." },
                { id: "p23", name: "Raspberry — 125g", price: 240, cat: "fruits", img: "img/Raspberry.jpeg", desc: "Fresh raspberries." },
                { id: "p24", name: "Dragon Fruit (पिताया) — 1 piece", price: 150, cat: "fruits", img: "img/Dragon Fruit (पिताया).jpeg", desc: "Exotic dragon fruit." },
                { id: "p26", name: "Custard Apple (सीताफल) — 1kg", price: 180, cat: "fruits", img: "img/Custard Apple.jpeg", desc: "Sweet custard apples." },
                { id: "p27", name: "Jamun (जामुन) — 500g", price: 100, cat: "fruits", img: "img/Jamun (जामुन).jpeg", desc: "Seasonal jamun fruit." },
                { id: "p28", name: "Mulberry (शहतूत) — 250g", price: 130, cat: "fruits", img: "img/Mulberry (शहतूत).jpeg", desc: "Fresh mulberries." },
                { id: "p29", name: "Cranberry — 250g", price: 220, cat: "fruits", img: "img/Cranberry.jpeg", desc: "Dried cranberries." },
                { id: "p30", name: "Starfruit (कमरख) — 1kg", price: 140, cat: "fruits", img: "img/Starfruit.jpeg", desc: "Fresh starfruit." },
                { id: "p31", name: "Sapota (चीकू) — 1kg", price: 90, cat: "fruits", img: "img/Sapota.jpeg", desc: "Sweet sapotas." },
                { id: "p32", name: "Sweet Lime (मौसमी) — 1kg", price: 70, cat: "fruits", img: "img/Sweet Lime (मौसमी).jpeg", desc: "Juicy sweet limes." },
                { id: "p33", name: "Custard Apple Hybrid — 1kg", price: 200, cat: "fruits", img: "img/Custard Apple Hybrid.jpeg", desc: "Premium hybrid custard apple." },
                { id: "p34", name: "Passion Fruit — 1kg", price: 250, cat: "fruits", img: "img/Passion Fruit.jpeg", desc: "Exotic passion fruit." },
                { id: "p35", name: "Gooseberry (आंवला) — 1kg", price: 80, cat: "fruits", img: "img/Gooseberry (आंवला).jpeg", desc: "Healthy Indian gooseberry." },
                { id: "p36", name: "Tamarind (इमली) — 500g", price: 90, cat: "fruits", img: "img/Tamarillo (Tree Tomato).jpeg", desc: "Tangy tamarind." },
                { id: "p37", name: "Jackfruit (कटहल) — 1kg", price: 60, cat: "fruits", img: "img/Jackfruit (कटहल).jpeg", desc: "Ripe jackfruit." },
                { id: "p38", name: "Wood Apple (बेल) — 1 piece", price: 50, cat: "fruits", img: "img/Wood Apple (बेल).jpeg", desc: "Traditional wood apple." },
                { id: "p39", name: "Loquat (लोकाट) — 1kg", price: 200, cat: "fruits", img: "img/Loquat (लोकाट).jpeg", desc: "Exotic loquat fruit." },
                { id: "p40", name: "Olives (जैतून) — 500g", price: 180, cat: "fruits", img: "img/Olives (जैतून).jpeg", desc: "Fresh green olives." },
                { id: "p41", name: "Peach — 1kg", price: 220, cat: "fruits", img: "img/pich.jpeg", desc: "Fresh ripe peaches." },
                { id: "p42", name: "Nectarine — 1kg", price: 230, cat: "fruits", img: "img/Nectarine.jpeg", desc: "Sweet nectarines." },
                { id: "p43", name: "Cherry — 250g", price: 260, cat: "fruits", img: "img/Cherry.jpeg", desc: "Juicy cherries." },
                { id: "p44", name: "Pomelo — 1kg", price: 180, cat: "fruits", img: "img/Pomelo.jpeg", desc: "Large citrus pomelo." },
                { id: "p45", name: "Tangerine (मँडरिन) — 1kg", price: 140, cat: "fruits", img: "img/Tangerine (मँडरिन).jpeg", desc: "Sweet tangerines." },
                { id: "p46", name: "Clementine — 1kg", price: 150, cat: "fruits", img: "img/Clementine.jpeg", desc: "Easy-peel clementines." },
                { id: "p47", name: "Kumquat — 250g", price: 220, cat: "fruits", img: "img/Kumquat.jpeg", desc: "Tangy kumquats." },
                { id: "p48", name: "Horned Melon (Kiwano) — 1 piece", price: 200, cat: "fruits", img: "img/Horned Melon.webp", desc: "Exotic horned melon." },
                { id: "p49", name: "Cantaloupe (Rockmelon) — 1kg", price: 120, cat: "fruits", img: "img/Cantaloupe.jpeg", desc: "Sweet cantaloupe melon." },
                { id: "p50", name: "Honeydew — 1kg", price: 130, cat: "fruits", img: "img/Honeydew.jpeg", desc: "Refreshing honeydew." },
                { id: "p51", name: "Galia Melon — 1kg", price: 150, cat: "fruits", img: "img/Galia Melon.jpeg", desc: "Aromatic Galia melon." },
                { id: "p52", name: "Boysenberry — 200g", price: 240, cat: "fruits", img: "img/Boysenberry.jpeg", desc: "Sweet boysenberries." },
                { id: "p53", name: "Elderberry — 200g", price: 260, cat: "fruits", img: "img/Elderberry.jpeg", desc: "Healthy elderberries." },
                { id: "p54", name: "Goji Berry — 200g", price: 300, cat: "fruits", img: "img/Goji Berry.jpeg", desc: "Nutritious goji berries." },
                { id: "p55", name: "Aronia (Chokeberry) — 200g", price: 220, cat: "fruits", img: "img/Aronia (Chokeberry).jpeg", desc: "Tart aronia berries." },
                { id: "p56", name: "Blackcurrant — 200g", price: 210, cat: "fruits", img: "img/Blackcurrant.jpeg", desc: "Rich blackcurrants." },
                { id: "p57", name: "Redcurrant — 200g", price: 200, cat: "fruits", img: "img/Redcurrant.jpeg", desc: "Fresh redcurrants." },
                { id: "p58", name: "Cape Gooseberry (Physalis) — 200g", price: 230, cat: "fruits", img: "img/Cape Gooseberry (Physalis).jpg", desc: "Sweet & tangy physalis." },
                { id: "p59", name: "Jujube (Ber) — 1kg", price: 160, cat: "fruits", img: "img/Jujube (Ber).jpeg", desc: "Crunchy jujube (ber)." },
                { id: "p60", name: "Prickly Pear — 1kg", price: 190, cat: "fruits", img: "img/Prickly Pear.jpeg", desc: "Sweet prickly pear (cactus fruit)." },
                { id: "p61", name: "Jackfruit (कटहल) — 1kg", price: 90, cat: "fruits", img: "img/Jackfruit (कटहल).jpeg", desc: "Fresh jackfruit pieces." },
                { id: "p62", name: "Langsat — 1kg", price: 180, cat: "fruits", img: "img/Langsat.jpeg", desc: "Sweet langsat fruits." },
                { id: "p63", name: "Salak (Snake Fruit) — 500g", price: 150, cat: "fruits", img: "img/Salak.webp", desc: "Unique snake fruits." },
                { id: "p64", name: "Ackee — 500g", price: 240, cat: "fruits", img: "img/Ackee.jpeg", desc: "Tropical ackee fruit." },
                { id: "p65", name: "Breadfruit — 1kg", price: 120, cat: "fruits", img: "img/Breadfruit.jpeg", desc: "Starchy breadfruit." },
                { id: "p66", name: "Medlar — 500g", price: 200, cat: "fruits", img: "img/Medlar.jpg", desc: "Tangy medlar fruits." },
                { id: "p67", name: "Santol — 1kg", price: 170, cat: "fruits", img: "img/Santol.jpeg", desc: "Exotic santol fruits." },
                { id: "p68", name: "Sugar Apple (शरीफा) — 1kg", price: 200, cat: "fruits", img: "img/Sugar Apple (शरीफा).jpeg", desc: "Sweet sugar apples." },
                { id: "p69", name: "Feijoa — 1kg", price: 190, cat: "fruits", img: "img/Feijoa.jpg", desc: "Aromatic feijoa fruits." },
                { id: "p70", name: "Quince — 1kg", price: 160, cat: "fruits", img: "img/Quince.jpeg", desc: "Golden quince fruits." },
                { id: "p71", name: "Marang — 1kg", price: 210, cat: "fruits", img: "img/Marang.jpeg", desc: "Exotic marang fruit." },
                { id: "p72", name: "Pulasan — 500g", price: 220, cat: "fruits", img: "img/Pulasan.jpeg", desc: "Sweet pulasan fruits." },
                { id: "p73", name: "Buddha’s Hand (Finger Citron) — 500g", price: 250, cat: "fruits", img: "img/Buddha’s Hand (Finger Citron).jpeg", desc: "Unique citrus variety." },
                { id: "p74", name: "Cloudberry — 200g", price: 270, cat: "fruits", img: "img/Cloudberry.jpeg", desc: "Rare cloudberries." },
                { id: "p75", name: "Sea Buckthorn — 200g", price: 230, cat: "fruits", img: "img/Sea Buckthorn.jpeg", desc: "Nutritious sea buckthorn berries." },
                { id: "p76", name: "Rowan Berry — 200g", price: 200, cat: "fruits", img: "img/Rowan Berry.jpeg", desc: "Tart rowan berries." },
                { id: "p77", name: "White Sapote — 1kg", price: 190, cat: "fruits", img: "img/White Sapote.jpeg", desc: "Sweet white sapote." },
                { id: "p78", name: "Tamarillo (Tree Tomato) — 1kg", price: 170, cat: "fruits", img: "img/Tamarillo (Tree Tomato).jpeg", desc: "Tangy tamarillo fruits." },
                { id: "p79", name: "Mamey Sapote — 1kg", price: 220, cat: "fruits", img: "img/Mamey Sapote.jpeg", desc: "Tropical mamey sapote." },
                { id: "p80", name: "Bael (बेल) — 1 piece", price: 60, cat: "fruits", img: "img/Bael (बेल).jpg", desc: "Traditional Indian bael fruit." },

                // ===== VEGETABLES (20) =====
                { id: "p21", name: "Tomato (टमाटर) — 1kg", price: 40, cat: "vegetables", img: "vejeteblimg/Tomato.jpeg", desc: "Fresh tomatoes." },
                { id: "p22", name: "Potato (आलू) — 1kg", price: 30, cat: "vegetables", img: "vejeteblimg/Potato.jpeg", desc: "Clean potatoes." },
                { id: "p23", name: "Carrot (गाजर) — 1kg", price: 50, cat: "vegetables", img: "vejeteblimg/Carrot.jpeg", desc: "Crunchy carrots." },
                { id: "p24", name: "Spinach (पालक) — bunch", price: 40, cat: "vegetables", img: "vejeteblimg/Spinach.jpeg", desc: "Green spinach." },
                { id: "p25", name: "Cabbage (पत्ता गोभी) — 1kg", price: 35, cat: "vegetables", img: "vejeteblimg/Cabbage.jpeg", desc: "Fresh cabbage." },
                { id: "p26", name: "Cauliflower (फूल गोभी) — 1kg", price: 50, cat: "vegetables", img: "vejeteblimg/Cauliflower.jpeg", desc: "Fresh cauliflower." },
                { id: "p27", name: "Capsicum (शिमला मिर्च) — 1kg", price: 80, cat: "vegetables", img: "vejeteblimg/Capsicum.jpeg", desc: "Fresh capsicum." },
                { id: "p28", name: "Ginger (अदरक) — 250g", price: 60, cat: "vegetables", img: "vejeteblimg/Ginger.jpeg", desc: "Fresh ginger." },
                { id: "p29", name: "Green Chilli — 100g", price: 15, cat: "vegetables", img: "vejeteblimg/Green Chilli.jpeg", desc: "Spicy green chillies." },
                { id: "p30", name: "Onion (प्याज) — 1kg", price: 30, cat: "vegetables", img: "vejeteblimg/Onion.jpeg", desc: "Fresh onions." },
                { id: "p31", name: "Beetroot (चुकंदर) — 1kg", price: 40, cat: "vegetables", img: "vejeteblimg/Beetroot.jpeg", desc: "Fresh beetroot." },
                { id: "p32", name: "Bottle Gourd (लौकी) — 1kg", price: 35, cat: "vegetables", img: "vejeteblimg/Bottle Gourd.jpeg", desc: "Fresh bottle gourd." },
                { id: "p33", name: "Brinjal (बैंगन) — 1kg", price: 45, cat: "vegetables", img: "vejeteblimg/Brinjal.jpeg", desc: "Fresh brinjal." },
                { id: "p34", name: "Cucumber (खीरा) — 1kg", price: 30, cat: "vegetables", img: "vejeteblimg/Cucumber.jpg", desc: "Fresh cucumber." },
                { id: "p35", name: "Garlic (लहसुन) — 100g", price: 25, cat: "vegetables", img: "vejeteblimg/Garlic.jpeg", desc: "Fresh garlic." },
                { id: "p36", name: "Radish (मूली) — 1kg", price: 40, cat: "vegetables", img: "vejeteblimg/Radish Leaves.jpeg", desc: "Fresh radish." },
                { id: "p37", name: "Ladyfinger (भिंडी) — 1kg", price: 35, cat: "vegetables", img: "vejeteblimg/Ladyfinger.jpeg", desc: "Fresh ladyfinger." },
                { id: "p38", name: "Pumpkin (कद्दू) — 1kg", price: 45, cat: "vegetables", img: "vejeteblimg/Pumpkin.jpeg", desc: "Fresh pumpkin." },
                { id: "p39", name: "Sweet Potato (शकरकंद) — 1kg", price: 60, cat: "vegetables", img: "vejeteblimg/Sweet Potato.jpeg", desc: "Fresh sweet potato." },
                { id: "540", name: "Bitter Gourd (करेला) — 1kg", price: 50, cat: "vegetables", img: "vejeteblimg/Bitter Gourd.jpeg", desc: "Fresh bitter gourd." },
                { id: "p41", name: "Broccoli — 500g", price: 120, cat: "vegetables", img: "vejeteblimg/Broccoli.jpeg", desc: "Fresh green broccoli." },
                { id: "p42", name: "Zucchini (तोरी) — 1kg", price: 90, cat: "vegetables", img: "vejeteblimg/Zucchini.jpeg", desc: "Fresh zucchini." },
                { id: "p43", name: "Kale — bunch", price: 150, cat: "vegetables", img: "vejeteblimg/Kale — bunch.jpeg", desc: "Nutritious kale leaves." },
                { id: "p44", name: "Celery — bunch", price: 80, cat: "vegetables", img: "vejeteblimg/Celery — bunch.jpeg", desc: "Crunchy celery stalks." },
                { id: "p45", name: "Asparagus — 250g", price: 200, cat: "vegetables", img: "vejeteblimg/Asparagus.jpeg", desc: "Fresh asparagus." },
                { id: "p46", name: "Lettuce (सलाद पत्ता) — 1 head", price: 60, cat: "vegetables", img: "vejeteblimg/Lettuce.jpeg", desc: "Crisp lettuce leaves." },
                { id: "p47", name: "Mushroom (मशरूम) — 200g", price: 100, cat: "vegetables", img: "vejeteblimg/Mushroom.jpeg", desc: "Fresh mushrooms." },
                { id: "p48", name: "Turnip (शलगम) — 1kg", price: 50, cat: "vegetables", img: "vejeteblimg/Turnip.jpeg", desc: "Fresh turnips." },
                { id: "p49", name: "Spring Onion (हरा प्याज) — bunch", price: 40, cat: "vegetables", img: "vejeteblimg/Spring Onion.jpeg", desc: "Fresh spring onions." },
                { id: "p50", name: "Coriander (धनिया पत्ता) — bunch", price: 20, cat: "vegetables", img: "vejeteblimg/Coriander.jpeg", desc: "Fresh coriander leaves." },
                { id: "p51", name: "Mint Leaves (पुदीना) — bunch", price: 25, cat: "vegetables", img: "vejeteblimg/Mint Leaves.webp", desc: "Fresh mint leaves." },
                { id: "p52", name: "Dill Leaves (सोआ पत्ता) — bunch", price: 30, cat: "vegetables", img: "vejeteblimg/Dill Leaves.jpeg", desc: "Fresh dill leaves." },
                { id: "p53", name: "Drumstick (सहजन) — 1kg", price: 70, cat: "vegetables", img: "vejeteblimg/Drumstick.jpeg", desc: "Fresh drumsticks." },
                { id: "p54", name: "Cluster Beans (ग्वार फली) — 1kg", price: 60, cat: "vegetables", img: "vejeteblimg/Cluster Beans.jpeg", desc: "Fresh cluster beans." },
                { id: "p55", name: "French Beans — 1kg", price: 80, cat: "vegetables", img: "vejeteblimg/French Beans.jpeg", desc: "Fresh french beans." },
                { id: "p56", name: "Ivy Gourd (कुंदरू) — 1kg", price: 50, cat: "vegetables", img: "vejeteblimg/Ivy Gourd.jpeg", desc: "Fresh ivy gourd." },
                { id: "p57", name: "Snake Gourd (चिचिंडा) — 1kg", price: 70, cat: "vegetables", img: "vejeteblimg/Snake Gourd.jpeg", desc: "Fresh snake gourd." },
                { id: "p58", name: "Pointed Gourd (परवल) — 1kg", price: 65, cat: "vegetables", img: "vejeteblimg/Pointed Gourd.jpeg", desc: "Fresh pointed gourd." },
                { id: "p59", name: "Colocasia (अरबी) — 1kg", price: 55, cat: "vegetables", img: "vejeteblimg/Colocasia.jpeg", desc: "Fresh colocasia roots." },
                { id: "p60", name: "Yam (जिमीकंद) — 1kg", price: 80, cat: "vegetables", img: "vejeteblimg/Yam.jpeg", desc: "Fresh yam roots." },
                { id: "p61", name: "Raw Banana (कच्चा केला) — 1kg", price: 40, cat: "vegetables", img: "vejeteblimg/Raw Banana.jpeg", desc: "Fresh raw bananas." },
                { id: "p62", name: "Red Cabbage — 1kg", price: 100, cat: "vegetables", img: "vejeteblimg/Red Cabbage.jpeg", desc: "Fresh red cabbage." },
                { id: "p63", name: "Pak Choi — bunch", price: 120, cat: "vegetables", img: "vejeteblimg/Pak Choi.jpeg", desc: "Fresh pak choi." },
                { id: "p64", name: "Leeks — bunch", price: 110, cat: "vegetables", img: "vejeteblimg/Leeks — bunch.jpeg", desc: "Fresh leeks." },
                { id: "p65", name: "Arugula (रॉकेट पत्ता) — bunch", price: 130, cat: "vegetables", img: "vejeteblimg/Arugula.jpeg", desc: "Fresh arugula leaves." },
                { id: "p66", name: "Watercress — bunch", price: 150, cat: "vegetables", img: "vejeteblimg/Watercress — bunch.jpeg", desc: "Fresh watercress leaves." },
                { id: "p67", name: "Sweet Corn (भुट्टा) — 2 pcs", price: 50, cat: "vegetables", img: "vejeteblimg/Sweet Corn.jpeg", desc: "Fresh sweet corn." },
                { id: "p68", name: "Baby Corn — 200g", price: 60, cat: "vegetables", img: "vejeteblimg/Baby Corn.jpeg", desc: "Fresh baby corn." },
                { id: "p69", name: "Okra Leaves — bunch", price: 40, cat: "vegetables", img: "vejeteblimg/Okra Leaves.jpeg", desc: "Fresh okra leaves." },
                { id: "p70", name: "Mustard Greens (सरसों पत्ता) — bunch", price: 50, cat: "vegetables", img: "vejeteblimg/Mustard Greens.jpeg", desc: "Fresh mustard greens." },
                { id: "p71", name: "Curry Leaves (करी पत्ता) — bunch", price: 30, cat: "vegetables", img: "vejeteblimg/Curry Leaves.jpeg", desc: "Aromatic curry leaves." },
                { id: "p72", name: "Fenugreek Leaves (मेथी पत्ता) — bunch", price: 40, cat: "vegetables", img: "vejeteblimg/Fenugreek Leaves.jpeg", desc: "Fresh fenugreek leaves." },
                { id: "p73", name: "Radish Leaves (मूली पत्ता) — bunch", price: 25, cat: "vegetables", img: "vejeteblimg/Radish Leaves.jpeg", desc: "Fresh radish leaves." },
                { id: "p74", name: "Taro Leaves (अरबी पत्ता) — bunch", price: 45, cat: "vegetables", img: "vejeteblimg/Taro Leaves.jpeg", desc: "Fresh taro leaves." },
                { id: "p75", name: "Banana Stem (केले का तना) — 1kg", price: 60, cat: "vegetables", img: "vejeteblimg/Banana Stem.jpeg", desc: "Fresh banana stem." },
                { id: "p76", name: "Banana Flower (केले का फूल) — 1 piece", price: 70, cat: "vegetables", img: "vejeteblimg/Banana Flower.jpeg", desc: "Fresh banana flower." },
                { id: "p77", name: "Lotus Stem (कमल ककड़ी) — 1kg", price: 120, cat: "vegetables", img: "vejeteblimg/Lotus Stem.jpeg", desc: "Fresh lotus stem." },
                { id: "p78", name: "Lotus Seeds (मखाना) — 100g", price: 150, cat: "vegetables", img: "vejeteblimg/Lotus Seeds.jpeg", desc: "Dried lotus seeds." },
                { id: "p79", name: "Seaweed — 100g", price: 200, cat: "vegetables", img: "vejeteblimg/Seaweed.jpeg", desc: "Fresh edible seaweed." },
                { id: "p80", name: "Broccolini — 250g", price: 180, cat: "vegetables", img: "vejeteblimg/Broccolini.jpeg", desc: "Fresh broccolini." },
                { id: "p81", name: "Parsley — bunch", price: 60, cat: "vegetables", img: "vejeteblimg/Parsley — bunch.jpeg", desc: "Fresh parsley." },
                { id: "p82", name: "Chives — bunch", price: 70, cat: "vegetables", img: "vejeteblimg/Chives — bunch.jpeg", desc: "Fresh chives." },
                { id: "p83", name: "Sorrel Leaves — bunch", price: 50, cat: "vegetables", img: "vejeteblimg/Sorrel Leaves — bunch.jpeg", desc: "Tangy sorrel leaves." },
                { id: "p84", name: "Purslane — bunch", price: 40, cat: "vegetables", img: "vejeteblimg/Purslane — bunch.jpeg", desc: "Fresh purslane." },
                { id: "p85", name: "Edamame Beans — 250g", price: 140, cat: "vegetables", img: "vejeteblimg/Edamame Beans.jpeg", desc: "Fresh edamame beans." },
                { id: "p86", name: "Snow Peas — 250g", price: 120, cat: "vegetables", img: "vejeteblimg/Snow Peas.jpeg", desc: "Fresh snow peas." },
                { id: "p87", name: "Sugar Snap Peas — 250g", price: 130, cat: "vegetables", img: "vejeteblimg/Sugar Snap Peas.jpeg", desc: "Fresh sugar snap peas." },
                { id: "p88", name: "Artichoke — 1 piece", price: 200, cat: "vegetables", img: "vejeteblimg/Artichoke — 1 piece.jpeg", desc: "Fresh artichoke." },
                { id: "p89", name: "Brussels Sprouts — 500g", price: 180, cat: "vegetables", img: "vejeteblimg/Brussels Sprouts.jpeg", desc: "Fresh brussels sprouts." },
                { id: "p90", name: "Swiss Chard — bunch", price: 150, cat: "vegetables", img: "vejeteblimg/Swiss Chard — bunch.jpeg", desc: "Fresh swiss chard." },
                { id: "p91", name: "Kohlrabi (गंथ गोभी) — 1kg", price: 70, cat: "vegetables", img: "vejeteblimg/Kohlrabi.jpeg", desc: "Fresh kohlrabi." },
                { id: "p92", name: "Horseradish Root — 250g", price: 160, cat: "vegetables", img: "vejeteblimg/Horseradish Root.jpeg", desc: "Fresh horseradish root." },
                { id: "p93", name: "Wasabi Root — 100g", price: 300, cat: "vegetables", img: "vejeteblimg/Wasabi Root.jpeg", desc: "Fresh wasabi root." },
                { id: "p94", name: "Scallions — bunch", price: 50, cat: "vegetables", img: "vejeteblimg/Scallions — bunch.jpeg", desc: "Fresh scallions." },
                { id: "p95", name: "Thai Basil — bunch", price: 60, cat: "vegetables", img: "vejeteblimg/Thai Basil — bunch.jpeg", desc: "Aromatic Thai basil." },
                { id: "p96", name: "Galangal Root — 250g", price: 140, cat: "vegetables", img: "vejeteblimg/Galangal Root.jpeg", desc: "Fresh galangal root." },
                { id: "p97", name: "Lemongrass — bunch", price: 70, cat: "vegetables", img: "vejeteblimg/Lemongrass — bunch.jpeg", desc: "Fresh lemongrass stalks." },
                { id: "p98", name: "Turmeric Root (कच्ची हल्दी) — 250g", price: 90, cat: "vegetables", img: "vejeteblimg/Turmeric Root.jpeg", desc: "Fresh turmeric root." },
                { id: "p99", name: "Peppermint Leaves — bunch", price: 50, cat: "vegetables", img: "vejeteblimg/Peppermint Leaves — bunch.jpeg", desc: "Fresh peppermint leaves." },
                { id: "p100", name: "Sage Leaves — bunch", price: 80, cat: "vegetables", img: "vejeteblimg/Sage Leaves — bunch.jpeg", desc: "Aromatic sage leaves." },

                // ===== DAIRY (20) =====
                { id: "p41", name: "Full Cream Milk — 1L", price: 65, cat: "dairy", img: "dairyimg/Full Cream Milk.webp", desc: "Fresh cow milk." },
                { id: "p42", name: "Paneer — 1kg", price: 300, cat: "dairy", img: "dairyimg/Paneer.jpeg", desc: "Soft paneer." },
                { id: "p43", name: "Butter — 500g", price: 300, cat: "dairy", img: "dairyimg/Butter.webp", desc: "Creamy butter." },
                { id: "p44", name: "Cheese — 200g", price: 120, cat: "dairy", img: "dairyimg", desc: "Delicious cheese block." },
                { id: "p45", name: "Curd (दही) — 500g", price: 50, cat: "dairy", img: "dairyimg", desc: "Fresh curd." },
                { id: "p46", name: "Ghee — 500g", price: 450, cat: "dairy", img: "dairyimg", desc: "Pure ghee." },
                { id: "p47", name: "Milk Powder — 1kg", price: 450, cat: "dairy", img: "dairyimg", desc: "Full milk powder." },
                { id: "p48", name: "Amul Butter — 500g", price: 300, cat: "dairy", img: "dairyimg", desc: "Creamy Amul butter." },
                { id: "p49", name: "Mozzarella Cheese — 200g", price: 150, cat: "dairy", img: "dairyimg", desc: "Soft mozzarella cheese." },
                { id: "p50", name: "Curd — 1kg", price: 90, cat: "dairy", img: "dairyimg", desc: "Thick curd." },
                { id: "p51", name: "Cheddar Cheese — 200g", price: 180, cat: "dairy", img: "dairyimg", desc: "Rich cheddar cheese." },
                { id: "p52", name: "Paneer Cubes — 500g", price: 160, cat: "dairy", img: "dairyimg", desc: "Soft paneer cubes." },
                { id: "p53", name: "Dahi — 500g", price: 50, cat: "dairy", img: "dairyimg", desc: "Fresh dahi." },
                { id: "p54", name: "Evaporated Milk — 1L", price: 200, cat: "dairy", img: "dairyimg", desc: "Rich evaporated milk." },
                { id: "p55", name: "Cream — 200ml", price: 80, cat: "dairy", img: "dairyimg", desc: "Fresh cream." },
                { id: "p56", name: "Butter Milk — 1L", price: 60, cat: "dairy", img: "dairyimg", desc: "Fresh buttermilk." },
                { id: "p57", name: "Flavored Milk — 1L", price: 90, cat: "dairy", img: "dairyimg", desc: "Chocolate flavored milk." },
                { id: "p58", name: "Probiotic Yogurt — 500g", price: 120, cat: "dairy", img: "dairyimg", desc: "Healthy probiotic yogurt." },
                { id: "p59", name: "Condensed Milk — 400g", price: 200, cat: "dairy", img: "dairyimg", desc: "Sweet condensed milk." },
                { id: "p60", name: "Khoa — 500g", price: 250, cat: "dairy", img: "dairyimg", desc: "Fresh khoa." },
                { id: "p61", name: "Double Toned Milk — 1L", price: 55, cat: "dairy", img: "dairyimg", desc: "Healthy double toned milk." },
                { id: "p62", name: "Organic Cow Milk — 1L", price: 70, cat: "dairy", img: "dairyimg", desc: "Pure organic cow milk." },
                { id: "p63", name: "Buffalo Milk — 1L", price: 75, cat: "dairy", img: "dairyimg", desc: "Rich buffalo milk." },
                { id: "p64", name: "Skimmed Milk — 1L", price: 60, cat: "dairy", img: "dairyimg", desc: "Low-fat skimmed milk." },
                { id: "p65", name: "Flavored Yogurt — 200g", price: 45, cat: "dairy", img: "dairyimg", desc: "Strawberry flavored yogurt." },
                { id: "p66", name: "Greek Yogurt — 200g", price: 60, cat: "dairy", img: "dairyimg", desc: "Creamy Greek yogurt." },
                { id: "p67", name: "Whipped Cream — 200ml", price: 90, cat: "dairy", img: "dairyimg", desc: "Fresh whipped cream." },
                { id: "p68", name: "Fresh Malai — 200g", price: 70, cat: "dairy", img: "dairyimg", desc: "Thick fresh malai." },
                { id: "p69", name: "Kefir — 500ml", price: 120, cat: "dairy", img: "dairyimg", desc: "Fermented milk kefir." },
                { id: "p70", name: "Rasgulla Tin — 1kg", price: 250, cat: "dairy", img: "dairyimg", desc: "Soft spongy rasgullas." },
                { id: "p71", name: "Gulab Jamun Tin — 1kg", price: 260, cat: "dairy", img: "dairyimg", desc: "Delicious gulab jamun." },
                { id: "p72", name: "Kalakand — 500g", price: 280, cat: "dairy", img: "dairyimg", desc: "Traditional kalakand sweet." },
                { id: "p73", name: "Rabri — 500g", price: 200, cat: "dairy", img: "dairyimg", desc: "Delicious rabri sweet." },
                { id: "p74", name: "Shrikhand — 500g", price: 180, cat: "dairy", img: "dairyimg", desc: "Maharashtrian shrikhand." },
                { id: "p75", name: "Sandesh — 500g", price: 220, cat: "dairy", img: "dairyimg", desc: "Fresh Bengali sandesh." },
                { id: "p76", name: "Milk Cake — 500g", price: 250, cat: "dairy", img: "dairyimg", desc: "Traditional milk cake." },
                { id: "p77", name: "Barfi — 500g", price: 240, cat: "dairy", img: "dairyimg", desc: "Sweet khoya barfi." },
                { id: "p78", name: "Peda — 500g", price: 260, cat: "dairy", img: "dairyimg", desc: "Fresh milk peda." },
                { id: "p79", name: "Chhena — 500g", price: 200, cat: "dairy", img: "dairyimg", desc: "Fresh chhena for sweets." },
                { id: "p80", name: "Milkshake (Banana) — 300ml", price: 70, cat: "dairy", img: "dairyimg", desc: "Banana milkshake." },
                { id: "p81", name: "Milkshake (Chocolate) — 300ml", price: 80, cat: "dairy", img: "dairyimg", desc: "Chocolate milkshake." },
                { id: "p82", name: "Milkshake (Mango) — 300ml", price: 75, cat: "dairy", img: "dairyimg", desc: "Mango milkshake." },
                { id: "p83", name: "Milkshake (Strawberry) — 300ml", price: 80, cat: "dairy", img: "dairyimg", desc: "Strawberry milkshake." },
                { id: "p84", name: "Butter Cookies — 500g", price: 150, cat: "dairy", img: "dairyimg", desc: "Fresh butter cookies." },
                { id: "p85", name: "Milk Bread — 400g", price: 60, cat: "dairy", img: "dairyimg", desc: "Soft milk bread." },
                { id: "p86", name: "Khoya Burfi — 500g", price: 260, cat: "dairy", img: "dairyimg", desc: "Traditional khoya burfi." },
                { id: "p87", name: "Rasmalai — 500g", price: 280, cat: "dairy", img: "dairyimg", desc: "Sweet rasmalai." },
                { id: "p88", name: "Lassi — 500ml", price: 50, cat: "dairy", img: "dairyimg", desc: "Refreshing lassi." },
                { id: "p89", name: "Misti Doi — 200g", price: 60, cat: "dairy", img: "dairyimg", desc: "Sweet mishti doi." },
                { id: "p90", name: "Basundi — 500g", price: 220, cat: "dairy", img: "dairyimg", desc: "Gujarati basundi sweet." },
                { id: "p91", name: "Kulfi — 100g", price: 40, cat: "dairy", img: "dairyimg", desc: "Traditional kulfi." },
                { id: "p92", name: "Ice Cream (Vanilla) — 500ml", price: 150, cat: "dairy", img: "dairyimg", desc: "Vanilla ice cream." },
                { id: "p93", name: "Ice Cream (Chocolate) — 500ml", price: 160, cat: "dairy", img: "dairyimg", desc: "Chocolate ice cream." },
                { id: "p94", name: "Ice Cream (Mango) — 500ml", price: 160, cat: "dairy", img: "dairyimg", desc: "Mango ice cream." },
                { id: "p95", name: "Ice Cream (Strawberry) — 500ml", price: 160, cat: "dairy", img: "dairyimg", desc: "Strawberry ice cream." },
                { id: "p96", name: "Frozen Yogurt — 500ml", price: 140, cat: "dairy", img: "dairyimg", desc: "Frozen yogurt dessert." },
                { id: "p97", name: "Milk Toffee — 200g", price: 90, cat: "dairy", img: "dairyimg", desc: "Milk toffee candies." },
                { id: "p98", name: "Milk Fudge — 200g", price: 120, cat: "dairy", img: "dairyimg", desc: "Delicious milk fudge." },
                { id: "p99", name: "Butter Scotch Ice Cream — 500ml", price: 170, cat: "dairy", img: "dairyimg", desc: "Butterscotch ice cream." },
                { id: "p100", name: "Matka Kulfi — 100g", price: 50, cat: "dairy", img: "dairyimg", desc: "Traditional matka kulfi." },
                { id: "p101", name: "Kheer — 500g", price: 180, cat: "dairy", img: "dairyimg", desc: "Rice kheer dessert." },
                { id: "p102", name: "Payasam — 500g", price: 200, cat: "dairy", img: "dairyimg", desc: "South Indian payasam." },
                { id: "p103", name: "Kulfi Falooda — 500g", price: 220, cat: "dairy", img: "dairyimg", desc: "Kulfi with falooda." },
                { id: "p104", name: "Thandai — 500ml", price: 120, cat: "dairy", img: "dairyimg", desc: "Refreshing thandai." },
                { id: "p105", name: "Malai Sandwich — 500g", price: 260, cat: "dairy", img: "dairyimg", desc: "Sweet malai sandwich." },
                { id: "p106", name: "Paneer Tikka — 250g", price: 180, cat: "dairy", img: "dairyimg", desc: "Paneer tikka pack." },
                { id: "p107", name: "Paneer Butter Masala Pack — 500g", price: 250, cat: "dairy", img: "dairyimg", desc: "Ready paneer butter masala." },
                { id: "p108", name: "Cheese Spread — 200g", price: 110, cat: "dairy", img: "dairyimg", desc: "Cheese spread pack." },
                { id: "p109", name: "Cheese Slice Pack — 200g", price: 130, cat: "dairy", img: "dairyimg", desc: "Cheese slices." },
                { id: "p110", name: "Pizza Cheese — 500g", price: 240, cat: "dairy", img: "dairyimg", desc: "Perfect pizza cheese." },
                { id: "p111", name: "Processed Cheese Block — 500g", price: 280, cat: "dairy", img: "dairyimg", desc: "Processed cheese block." },
                { id: "p112", name: "Cheese Cubes — 200g", price: 140, cat: "dairy", img: "dairyimg", desc: "Cheese cubes for snacking." },
                { id: "p113", name: "Cheese Powder — 100g", price: 100, cat: "dairy", img: "dairyimg", desc: "Cheese powder for flavoring." },
                { id: "p114", name: "Ricotta Cheese — 200g", price: 200, cat: "dairy", img: "dairyimg", desc: "Fresh ricotta cheese." },
                { id: "p115", name: "Feta Cheese — 200g", price: 220, cat: "dairy", img: "dairyimg", desc: "Greek feta cheese." },
                { id: "p116", name: "Blue Cheese — 200g", price: 300, cat: "dairy", img: "dairyimg", desc: "Tangy blue cheese." },
                { id: "p117", name: "Parmesan Cheese — 200g", price: 350, cat: "dairy", img: "dairyimg", desc: "Italian parmesan cheese." },
                { id: "p118", name: "Mascarpone Cheese — 200g", price: 320, cat: "dairy", img: "dairyimg", desc: "Creamy mascarpone." },
                { id: "p119", name: "Edam Cheese — 200g", price: 280, cat: "dairy", img: "dairyimg", desc: "Dutch edam cheese." },
                { id: "p120", name: "Gouda Cheese — 200g", price: 300, cat: "dairy", img: "dairyimg", desc: "Rich gouda cheese." },
                { id: "p121", name: "Swiss Cheese — 200g", price: 320, cat: "dairy", img: "dairyimg", desc: "Nutty swiss cheese." },
                { id: "p122", name: "Halloumi Cheese — 200g", price: 330, cat: "dairy", img: "dairyimg", desc: "Grill halloumi cheese." },
                { id: "p123", name: "Cream Cheese — 200g", price: 150, cat: "dairy", img: "dairyimg", desc: "Smooth cream cheese." },
                { id: "p124", name: "Smoked Cheese — 200g", price: 250, cat: "dairy", img: "dairyimg", desc: "Smoky flavored cheese." },
                { id: "p125", name: "Cheese Dip — 200g", price: 120, cat: "dairy", img: "dairyimg", desc: "Cheese dip for snacks." },
                { id: "p126", name: "Mozzarella Shreds — 200g", price: 160, cat: "dairy", img: "dairyimg", desc: "Shredded mozzarella cheese." },
                { id: "p127", name: "Cheese Sauce — 200g", price: 140, cat: "dairy", img: "dairyimg", desc: "Cheesy sauce." },
                { id: "p128", name: "Paneer Bhurji Pack — 250g", price: 170, cat: "dairy", img: "dairyimg", desc: "Ready paneer bhurji." },
                { id: "p129", name: "Malai Paneer — 500g", price: 190, cat: "dairy", img: "dairyimg", desc: "Soft malai paneer." },
                { id: "p130", name: "Tofu (Soy Paneer) — 500g", price: 120, cat: "dairy", img: "dairyimg", desc: "Healthy tofu paneer." },
                { id: "p131", name: "Sour Cream — 200g", price: 130, cat: "dairy", img: "dairyimg", desc: "Fresh sour cream." },
                { id: "p132", name: "Sweet Lassi — 500ml", price: 60, cat: "dairy", img: "dairyimg", desc: "Refreshing sweet lassi." },
                { id: "p133", name: "Salted Lassi — 500ml", price: 55, cat: "dairy", img: "dairyimg", desc: "Refreshing salted lassi." },
                { id: "p134", name: "Rose Lassi — 500ml", price: 70, cat: "dairy", img: "dairyimg", desc: "Rose flavored lassi." },
                { id: "p135", name: "Mango Lassi — 500ml", price: 80, cat: "dairy", img: "dairyimg", desc: "Mango flavored lassi." },
                { id: "p136", name: "Badam Milk — 500ml", price: 100, cat: "dairy", img: "dairyimg", desc: "Almond flavored milk." },
                { id: "p137", name: "Rose Milk — 500ml", price: 90, cat: "dairy", img: "dairyimg", desc: "Rose flavored milk." },
                { id: "p138", name: "Kesar Milk — 500ml", price: 120, cat: "dairy", img: "dairyimg", desc: "Saffron flavored milk." },
                { id: "p139", name: "Turmeric Milk — 500ml", price: 110, cat: "dairy", img: "dairyimg", desc: "Golden turmeric milk." },
                { id: "p140", name: "Chocolate Milkshake Bottle — 1L", price: 150, cat: "dairy", img: "dairyimg", desc: "Chocolate milkshake bottle." },
                { id: "p141", name: "Coffee Milkshake Bottle — 1L", price: 160, cat: "dairy", img: "dairyimg", desc: "Coffee milkshake bottle." },
                { id: "p142", name: "Strawberry Milkshake Bottle — 1L", price: 160, cat: "dairy", img: "dairyimg", desc: "Strawberry milkshake bottle." },
                { id: "p143", name: "Vanilla Milkshake Bottle — 1L", price: 150, cat: "dairy", img: "dairyimg", desc: "Vanilla milkshake bottle." },
                { id: "p144", name: "Butter Popcorn — 100g", price: 80, cat: "dairy", img: "dairyimg", desc: "Butter coated popcorn." },
                { id: "p145", name: "Cheese Popcorn — 100g", price: 90, cat: "dairy", img: "dairyimg", desc: "Cheesy popcorn." },
                { id: "p146", name: "Paneer Pakora — 250g", price: 150, cat: "dairy", img: "dairyimg", desc: "Crispy paneer pakora." },
                { id: "p147", name: "Cheese Balls — 200g", price: 120, cat: "dairy", img: "dairyimg", desc: "Cheese stuffed balls." },
                { id: "p148", name: "Cheese Sticks — 200g", price: 130, cat: "dairy", img: "dairyimg", desc: "Crispy cheese sticks." },
                { id: "p149", name: "Cheese Crackers — 200g", price: 110, cat: "dairy", img: "dairyimg", desc: "Cheese flavored crackers." },
                { id: "p150", name: "Butter Khari — 200g", price: 90, cat: "dairy", img: "dairyimg", desc: "Flaky butter khari." },
                { id: "p151", name: "Butter NanKhatai — 200g", price: 100, cat: "dairy", img: "dairyimg", desc: "Traditional butter nankhatai." },
                { id: "p152", name: "Milk Rusk — 400g", price: 120, cat: "dairy", img: "dairyimg", desc: "Crispy milk rusk." },
                { id: "p153", name: "Butter Roti Pack — 5 pcs", price: 80, cat: "dairy", img: "dairyimg", desc: "Soft butter roti." },
                { id: "p154", name: "Cheese Garlic Bread — 250g", price: 150, cat: "dairy", img: "dairyimg", desc: "Cheesy garlic bread." },
                { id: "p155", name: "Cheese Pizza Base — 2 pcs", price: 160, cat: "dairy", img: "dairyimg", desc: "Ready cheese pizza base." },
                { id: "p156", name: "Paneer Stuffed Paratha — 2 pcs", price: 120, cat: "dairy", img: "dairyimg", desc: "Paneer stuffed paratha." },
                { id: "p157", name: "Cheese Paratha — 2 pcs", price: 130, cat: "dairy", img: "dairyimg", desc: "Cheese stuffed paratha." },
                { id: "p158", name: "Butter Kulcha — 2 pcs", price: 100, cat: "dairy", img: "dairyimg", desc: "Soft butter kulcha." },
                { id: "p159", name: "Paneer Roll — 1 pc", price: 90, cat: "dairy", img: "dairyimg", desc: "Paneer stuffed roll." },
                { id: "p160", name: "Cheese Roll — 1 pc", price: 95, cat: "dairy", img: "dairyimg", desc: "Cheese stuffed roll." },
                { id: "p161", name: "Plain Yogurt Cup — 200g", price: 40, cat: "dairy", img: "dairyimg", desc: "Fresh plain yogurt." },
                { id: "p162", name: "Greek Yogurt Cup — 200g", price: 60, cat: "dairy", img: "dairyimg", desc: "Thick creamy greek yogurt." },
                { id: "p163", name: "Strawberry Yogurt Cup — 200g", price: 70, cat: "dairy", img: "dairyimg", desc: "Strawberry flavored yogurt." },
                { id: "p164", name: "Mango Yogurt Cup — 200g", price: 70, cat: "dairy", img: "dairyimg", desc: "Mango flavored yogurt." },
                { id: "p165", name: "Blueberry Yogurt Cup — 200g", price: 80, cat: "dairy", img: "dairyimg", desc: "Blueberry flavored yogurt." },
                { id: "p166", name: "Honey Yogurt Cup — 200g", price: 75, cat: "dairy", img: "dairyimg", desc: "Honey sweetened yogurt." },
                { id: "p167", name: "Fruit Yogurt Combo Pack — 4 Cups", price: 220, cat: "dairy", img: "dairyimg", desc: "Mix flavored yogurt cups." },
                { id: "p168", name: "Probiotic Yogurt Drink — 200ml", price: 55, cat: "dairy", img: "dairyimg", desc: "Healthy probiotic yogurt drink." },
                { id: "p169", name: "Milk Powder Pouch — 500g", price: 250, cat: "dairy", img: "dairyimg", desc: "Instant milk powder." },
                { id: "p170", name: "Skimmed Milk Powder — 500g", price: 260, cat: "dairy", img: "dairyimg", desc: "Low fat milk powder." },
                { id: "p171", name: "Full Cream Milk Powder — 500g", price: 280, cat: "dairy", img: "dairyimg", desc: "Full cream milk powder." },
                { id: "p172", name: "Condensed Milk Tin — 400g", price: 150, cat: "dairy", img: "dairyimg", desc: "Sweetened condensed milk." },
                { id: "p173", name: "Evaporated Milk Tin — 400g", price: 140, cat: "dairy", img: "dairyimg", desc: "Unsweetened evaporated milk." },
                { id: "p174", name: "Whipping Cream — 200ml", price: 130, cat: "dairy", img: "dairyimg", desc: "Cream for desserts." },
                { id: "p175", name: "Cooking Cream — 200ml", price: 120, cat: "dairy", img: "dairyimg", desc: "Cream for cooking." },
                { id: "p176", name: "Fresh Cream — 200ml", price: 110, cat: "dairy", img: "dairyimg", desc: "Fresh dairy cream." },
                { id: "p177", name: "Sweet Cream Butter — 200g", price: 140, cat: "dairy", img: "dairyimg", desc: "Sweet cream butter." },
                { id: "p178", name: "Salted Butter — 200g", price: 145, cat: "dairy", img: "dairyimg", desc: "Salted butter block." },
                { id: "p179", name: "Unsalted Butter — 200g", price: 150, cat: "dairy", img: "dairyimg", desc: "Unsalted butter block." },
                { id: "p180", name: "White Butter — 200g", price: 130, cat: "dairy", img: "dairyimg", desc: "Traditional white butter." },
                { id: "p181", name: "Ghee Tin — 500ml", price: 380, cat: "dairy", img: "dairyimg", desc: "Pure desi ghee." },
                { id: "p182", name: "Organic Ghee — 500ml", price: 420, cat: "dairy", img: "dairyimg", desc: "Organic cow ghee." },
                { id: "p183", name: "Cow Ghee — 500ml", price: 400, cat: "dairy", img: "dairyimg", desc: "Traditional cow ghee." },
                { id: "p184", name: "Buffalo Ghee — 500ml", price: 410, cat: "dairy", img: "dairyimg", desc: "Rich buffalo ghee." },
                { id: "p185", name: "Flavored Milk Bottle — 500ml", price: 95, cat: "dairy", img: "dairyimg", desc: "Chilled flavored milk." },
                { id: "p186", name: "Cold Coffee Bottle — 500ml", price: 110, cat: "dairy", img: "dairyimg", desc: "Ready to drink cold coffee." },
                { id: "p187", name: "Kefir Bottle — 500ml", price: 130, cat: "dairy", img: "dairyimg", desc: "Fermented kefir drink." },
                { id: "p188", name: "Milk Shake Mix Pouch — 200g", price: 100, cat: "dairy", img: "dairyimg", desc: "Milkshake premix powder." },
                { id: "p189", name: "Protein Milk Shake — 500ml", price: 150, cat: "dairy", img: "dairyimg", desc: "High protein milk shake." },
                { id: "p190", name: "0 — 200g", price: 85, cat: "dairy", img: "dairyimg", desc: "Ready to eat dairy dessert." },

                // ===== OTHER (20) =====
                { id: "p61", name: "Olive (जैतून) — 250g", price: 250, cat: "other", img: "", desc: "Imported olives." },
                { id: "p62", name: "Olive Oil — 1L", price: 800, cat: "other", img: "", desc: "Pure olive oil." },
                { id: "p63", name: "Honey (शहद) — 500g", price: 250, cat: "other", img: "", desc: "Natural organic honey." },
                { id: "p64", name: "Jam — 250g", price: 180, cat: "other", img: "", desc: "Delicious jam." },
                { id: "p65", name: "Pickle (अचार) — 500g", price: 120, cat: "other", img: "", desc: "Spicy pickle." },
                { id: "p66", name: "Chocolate — 100g", price: 100, cat: "other", img: "", desc: "Sweet chocolate." },
                { id: "p67", name: "Cashew Nuts — 200g", price: 250, cat: "other", img: "", desc: "Fresh cashew nuts." },
                { id: "p68", name: "Almonds — 200g", price: 300, cat: "other", img: "", desc: "Fresh almonds." },
                { id: "p69", name: "Walnuts — 200g", price: 350, cat: "other", img: "", desc: "Fresh walnuts." },
                { id: "p70", name: "Peanuts — 200g", price: 100, cat: "other", img: "", desc: "Roasted peanuts." },
                { id: "p71", name: "Dates — 500g", price: 150, cat: "other", img: "", desc: "Sweet dates." },
                { id: "p72", name: "Raisins — 200g", price: 120, cat: "other", img: "", desc: "Healthy raisins." },
                { id: "p73", name: "Soya Chunks — 500g", price: 200, cat: "other", img: "", desc: "High protein soya chunks." },
                { id: "p74", name: "Oats — 1kg", price: 250, cat: "other", img: "", desc: "Healthy oats." },
                { id: "p75", name: "Cornflakes — 500g", price: 200, cat: "other", img: "", desc: "Crunchy cornflakes." },
                { id: "p76", name: "Sugar — 1kg", price: 50, cat: "other", img: "", desc: "Refined sugar." },
                { id: "p77", name: "Salt — 1kg", price: 20, cat: "other", img: "", desc: "Pure salt." },
                { id: "p78", name: "Tea — 250g", price: 150, cat: "other", img: "", desc: "Premium tea leaves." },
                { id: "p79", name: "Coffee — 250g", price: 200, cat: "other", img: "", desc: "Rich coffee powder." },
                { id: "p80", name: "Chocolate Syrup — 500ml", price: 180, cat: "other", img: "", desc: "Sweet chocolate syrup." },
                // ===== OTHER (p81 – p180) =====
                { id: "p81", name: "Bournvita — 500g", price: 220, cat: "other", img: "", desc: "Chocolate health drink." },
                { id: "p82", name: "Horlicks — 500g", price: 230, cat: "other", img: "", desc: "Malted health drink." },
                { id: "p83", name: "Kellogg's Chocos — 375g", price: 190, cat: "other", img: "", desc: "Chocolatey cereal." },
                { id: "p84", name: "Maggi Masala Noodles — 280g", price: 60, cat: "other", img: "", desc: "Instant noodles pack." },
                { id: "p85", name: "Top Ramen Curry — 280g", price: 65, cat: "other", img: "", desc: "Instant curry noodles." },
                { id: "p86", name: "Sunfeast Yippee Noodles — 280g", price: 70, cat: "other", img: "", desc: "Long tasty noodles." },
                { id: "p87", name: "Parle-G Biscuits — 800g", price: 90, cat: "other", img: "", desc: "Classic glucose biscuits." },
                { id: "p88", name: "Oreo Biscuits — 120g", price: 40, cat: "other", img: "", desc: "Chocolate cream biscuits." },
                { id: "p89", name: "Bourbon Biscuits — 150g", price: 50, cat: "other", img: "", desc: "Chocolate cream sandwich biscuits." },
                { id: "p90", name: "Good Day Cashew Cookies — 200g", price: 70, cat: "other", img: "", desc: "Crunchy cashew cookies." },
                { id: "p91", name: "Hide & Seek Fab — 150g", price: 60, cat: "other", img: "", desc: "Chocolate filled biscuits." },
                { id: "p92", name: "Perk Chocolate — 30g", price: 20, cat: "other", img: "", desc: "Crispy wafer chocolate." },
                { id: "p93", name: "KitKat Chocolate — 4 Finger", price: 30, cat: "other", img: "", desc: "Crispy wafer chocolate bar." },
                { id: "p94", name: "Dairy Milk Silk — 150g", price: 160, cat: "other", img: "", desc: "Silky smooth chocolate." },
                { id: "p95", name: "5 Star Chocolate — 40g", price: 25, cat: "other", img: "", desc: "Caramel filled chocolate." },
                { id: "p96", name: "Munch — 30g", price: 20, cat: "other", img: "", desc: "Crispy wafer chocolate." },
                { id: "p97", name: "Milkybar — 25g", price: 20, cat: "other", img: "", desc: "White chocolate bar." },
                { id: "p98", name: "Ferrero Rocher — 200g", price: 550, cat: "other", img: "", desc: "Premium hazelnut chocolates." },
                { id: "p99", name: "Toblerone — 100g", price: 250, cat: "other", img: "", desc: "Swiss milk chocolate with honey and almond." },
                { id: "p100", name: "Lindt Dark Chocolate — 100g", price: 300, cat: "other", img: "", desc: "Rich dark chocolate." },
                // ===== OTHER (p101 – p150) =====
                { id: "p101", name: "Lays Classic Salted — 100g", price: 40, cat: "other", img: "", desc: "Crispy salted potato chips." },
                { id: "p102", name: "Lays Magic Masala — 100g", price: 40, cat: "other", img: "", desc: "Spicy magic masala chips." },
                { id: "p103", name: "Lays Sour Cream & Onion — 100g", price: 50, cat: "other", img: "", desc: "Tangy sour cream & onion chips." },
                { id: "p104", name: "Doritos Nacho Cheese — 100g", price: 70, cat: "other", img: "", desc: "Cheesy nacho tortilla chips." },
                { id: "p105", name: "Kurkure Masala Munch — 100g", price: 20, cat: "other", img: "", desc: "Spicy crunchy kurkure." },
                { id: "p106", name: "Bingo Mad Angles — 100g", price: 25, cat: "other", img: "", desc: "Tangy triangle chips." },
                { id: "p107", name: "Pringles Original — 107g", price: 110, cat: "other", img: "", desc: "Stacked potato crisps." },
                { id: "p108", name: "Haldiram Aloo Bhujia — 200g", price: 60, cat: "other", img: "", desc: "Crispy aloo bhujia namkeen." },
                { id: "p109", name: "Haldiram Moong Dal — 200g", price: 70, cat: "other", img: "", desc: "Crunchy fried moong dal." },
                { id: "p110", name: "Haldiram Navratan Mix — 200g", price: 75, cat: "other", img: "", desc: "Spicy mixture of namkeen." },
                { id: "p111", name: "Bikaneri Bhujia — 200g", price: 80, cat: "other", img: "", desc: "Famous Bikaneri bhujia." },
                { id: "p112", name: "Masala Peanuts — 200g", price: 90, cat: "other", img: "", desc: "Spicy coated peanuts." },
                { id: "p113", name: "Chana Jor Garam — 200g", price: 70, cat: "other", img: "", desc: "Tangy spicy roasted chana." },
                { id: "p114", name: "Popcorn — 100g", price: 50, cat: "other", img: "", desc: "Ready to cook popcorn." },
                { id: "p115", name: "Act II Butter Popcorn — 60g", price: 30, cat: "other", img: "", desc: "Instant butter popcorn." },
                { id: "p116", name: "Cheese Balls — 100g", price: 40, cat: "other", img: "", desc: "Crunchy cheese flavored balls." },
                { id: "p117", name: "Nachos Salsa Combo — 150g", price: 120, cat: "other", img: "", desc: "Nachos with salsa dip." },
                { id: "p118", name: "Real Orange Juice — 1L", price: 120, cat: "other", img: "", desc: "Refreshing orange juice." },
                { id: "p119", name: "Real Mango Juice — 1L", price: 130, cat: "other", img: "", desc: "Sweet mango juice." },
                { id: "p120", name: "Real Mixed Fruit Juice — 1L", price: 140, cat: "other", img: "", desc: "Mixed fruit delight juice." },
                { id: "p121", name: "Tropicana Apple Juice — 1L", price: 150, cat: "other", img: "", desc: "Refreshing apple juice." },
                { id: "p122", name: "Tropicana Guava Juice — 1L", price: 150, cat: "other", img: "", desc: "Delicious guava juice." },
                { id: "p123", name: "Slice Mango Drink — 750ml", price: 45, cat: "other", img: "", desc: "Tasty mango drink." },
                { id: "p124", name: "Maaza Mango Drink — 1L", price: 55, cat: "other", img: "", desc: "Refreshing mango drink." },
                { id: "p125", name: "Frooti Mango Drink — 1.2L", price: 60, cat: "other", img: "", desc: "Popular mango flavored drink." },
                { id: "p126", name: "Coca-Cola — 2L", price: 95, cat: "other", img: "", desc: "Chilled cola soft drink." },
                { id: "p127", name: "Pepsi — 2L", price: 95, cat: "other", img: "", desc: "Refreshing soft drink." },
                { id: "p128", name: "Sprite — 2L", price: 95, cat: "other", img: "", desc: "Lemon flavored soft drink." },
                { id: "p129", name: "Mountain Dew — 2L", price: 95, cat: "other", img: "", desc: "Refreshing energy soft drink." },
                { id: "p130", name: "7 Up — 2L", price: 95, cat: "other", img: "", desc: "Lime-lemon refreshing drink." },
                { id: "p131", name: "Appy Fizz — 750ml", price: 50, cat: "other", img: "", desc: "Sparkling apple drink." },
                { id: "p132", name: "Paper Boat Aam Panna — 600ml", price: 40, cat: "other", img: "", desc: "Traditional aam panna drink." },
                { id: "p133", name: "Paper Boat Jaljeera — 600ml", price: 40, cat: "other", img: "", desc: "Refreshing jaljeera drink." },
                { id: "p134", name: "Paper Boat Chaas — 600ml", price: 40, cat: "other", img: "", desc: "Traditional buttermilk drink." },
                { id: "p135", name: "Red Bull Energy Drink — 250ml", price: 120, cat: "other", img: "", desc: "Popular energy drink." },
                { id: "p136", name: "Monster Energy Drink — 350ml", price: 140, cat: "other", img: "", desc: "Strong energy drink." },
                { id: "p137", name: "Sting Energy Drink — 250ml", price: 50, cat: "other", img: "", desc: "Affordable energy drink." },
                { id: "p138", name: "Bisleri Water — 1L", price: 20, cat: "other", img: "", desc: "Packaged drinking water." },
                { id: "p139", name: "Kinley Water — 1L", price: 20, cat: "other", img: "", desc: "Mineral drinking water." },
                { id: "p140", name: "Aquafina Water — 1L", price: 20, cat: "other", img: "", desc: "Pure mineral water." },
                { id: "p141", name: "Kissan Tomato Ketchup — 1kg", price: 120, cat: "other", img: "", desc: "Rich tomato ketchup." },
                { id: "p142", name: "Maggi Hot & Sweet Sauce — 500g", price: 95, cat: "other", img: "", desc: "Sweet and spicy sauce." },
                { id: "p143", name: "Ching's Green Chilli Sauce — 200g", price: 60, cat: "other", img: "", desc: "Hot green chilli sauce." },
                { id: "p144", name: "Ching's Red Chilli Sauce — 200g", price: 60, cat: "other", img: "", desc: "Spicy red chilli sauce." },
                { id: "p145", name: "Ching's Soy Sauce — 200g", price: 55, cat: "other", img: "", desc: "Dark soy sauce." },
                { id: "p146", name: "Ching's Schezwan Chutney — 250g", price: 80, cat: "other", img: "", desc: "Spicy schezwan chutney." },
                { id: "p147", name: "Mayonnaise — 250g", price: 90, cat: "other", img: "", desc: "Smooth creamy mayonnaise." },
                { id: "p148", name: "Pizza Pasta Sauce — 200g", price: 100, cat: "other", img: "", desc: "Delicious pizza pasta sauce." },
                { id: "p149", name: "Schezwan Noodles Sauce — 250g", price: 110, cat: "other", img: "", desc: "Spicy schezwan sauce." },
                { id: "p150", name: "Green Chutney Dip — 200g", price: 70, cat: "other", img: "", desc: "Tangy green chutney dip." },
                // ===== OTHER (p151 – p200) =====
                { id: "p151", name: "Parle-G Biscuits — 800g", price: 80, cat: "other", img: "", desc: "Classic glucose biscuits." },
                { id: "p152", name: "Marie Gold Biscuits — 600g", price: 85, cat: "other", img: "", desc: "Light tea-time biscuits." },
                { id: "p153", name: "Oreo Chocolate Creme — 120g", price: 40, cat: "other", img: "", desc: "Delicious choco cream biscuits." },
                { id: "p154", name: "Oreo Vanilla Creme — 120g", price: 40, cat: "other", img: "", desc: "Classic vanilla cream biscuits." },
                { id: "p155", name: "Hide & Seek Fab Choco — 150g", price: 60, cat: "other", img: "", desc: "Chocolate filled cookies." },
                { id: "p156", name: "Bourbon Biscuits — 150g", price: 35, cat: "other", img: "", desc: "Chocolate cream bourbon biscuits." },
                { id: "p157", name: "Good Day Butter Cookies — 200g", price: 50, cat: "other", img: "", desc: "Crispy butter cookies." },
                { id: "p158", name: "Good Day Cashew Cookies — 200g", price: 55, cat: "other", img: "", desc: "Nutty cashew cookies." },
                { id: "p159", name: "Jim Jam Biscuits — 150g", price: 35, cat: "other", img: "", desc: "Jam filled biscuits." },
                { id: "p160", name: "Little Hearts Biscuits — 75g", price: 20, cat: "other", img: "", desc: "Crunchy sweet hearts." },
                { id: "p161", name: "Perk Chocolate — 100g", price: 50, cat: "other", img: "", desc: "Crispy wafer chocolate." },
                { id: "p162", name: "KitKat Chocolate — 4 Finger", price: 60, cat: "other", img: "", desc: "Crunchy wafer coated in chocolate." },
                { id: "p163", name: "Munch Chocolate — 110g", price: 40, cat: "other", img: "", desc: "Light wafer chocolate." },
                { id: "p164", name: "Dairy Milk Chocolate — 100g", price: 80, cat: "other", img: "", desc: "Rich Cadbury dairy milk." },
                { id: "p165", name: "Dairy Milk Silk — 150g", price: 150, cat: "other", img: "", desc: "Smooth dairy milk silk." },
                { id: "p166", name: "5 Star Chocolate — 100g", price: 50, cat: "other", img: "", desc: "Chewy caramel filled chocolate." },
                { id: "p167", name: "Milkybar White Chocolate — 100g", price: 60, cat: "other", img: "", desc: "Creamy white chocolate." },
                { id: "p168", name: "Alpenliebe Toffee — 200g", price: 70, cat: "other", img: "", desc: "Creamy caramel toffees." },
                { id: "p169", name: "Eclairs Toffee — 200g", price: 60, cat: "other", img: "", desc: "Chocolate filled toffees." },
                { id: "p170", name: "Pulse Candy — 200g", price: 50, cat: "other", img: "", desc: "Tangy raw mango candy." },
                { id: "p171", name: "Mentos Mint — 150g", price: 60, cat: "other", img: "", desc: "Refreshing mint candies." },
                { id: "p172", name: "Center Fresh Chewing Gum — 120g", price: 50, cat: "other", img: "", desc: "Mint liquid filled gum." },
                { id: "p173", name: "Center Fruit Chewing Gum — 120g", price: 50, cat: "other", img: "", desc: "Fruit filled chewing gum." },
                { id: "p174", name: "Boomer Bubble Gum — 100g", price: 40, cat: "other", img: "", desc: "Chewy bubble gum." },
                { id: "p175", name: "Lotte Choco Pie — 168g", price: 100, cat: "other", img: "", desc: "Chocolate coated choco pie." },
                { id: "p176", name: "Britannia Fruit Cake — 200g", price: 70, cat: "other", img: "", desc: "Delicious fruit cake." },
                { id: "p177", name: "Britannia Rusk — 500g", price: 90, cat: "other", img: "", desc: "Crispy wheat rusks." },
                { id: "p178", name: "Maggi Masala Noodles — 560g", price: 75, cat: "other", img: "", desc: "Instant masala noodles." },
                { id: "p179", name: "Maggi Atta Noodles — 280g", price: 40, cat: "other", img: "", desc: "Healthy atta noodles." },
                { id: "p180", name: "Maggi Oats Noodles — 280g", price: 45, cat: "other", img: "", desc: "Nutritious oats noodles." },
                { id: "p181", name: "Top Ramen Curry Noodles — 280g", price: 50, cat: "other", img: "", desc: "Instant curry noodles." },
                { id: "p182", name: "Yippee Magic Masala Noodles — 280g", price: 45, cat: "other", img: "", desc: "Masala instant noodles." },
                { id: "p183", name: "Yippee Classic Noodles — 280g", price: 45, cat: "other", img: "", desc: "Classic plain noodles." },
                { id: "p184", name: "Sunfeast Pasta Treat Masala — 70g", price: 25, cat: "other", img: "", desc: "Instant masala pasta." },
                { id: "p185", name: "Sunfeast Pasta Cheese — 70g", price: 30, cat: "other", img: "", desc: "Instant cheesy pasta." },
                { id: "p186", name: "Chings Hakka Noodles — 500g", price: 70, cat: "other", img: "", desc: "Chinese style hakka noodles." },
                { id: "p187", name: "Chings Schezwan Noodles — 500g", price: 75, cat: "other", img: "", desc: "Spicy schezwan noodles." },
                { id: "p188", name: "Knorr Soupy Noodles — 250g", price: 60, cat: "other", img: "", desc: "Instant soupy noodles." },
                { id: "p189", name: "Knorr Tomato Soup — 250g", price: 90, cat: "other", img: "", desc: "Delicious tomato soup." },
                { id: "p190", name: "Knorr Sweet Corn Soup — 250g", price: 95, cat: "other", img: "", desc: "Sweet corn flavored soup." },
                { id: "p191", name: "Knorr Hot & Sour Soup — 250g", price: 95, cat: "other", img: "", desc: "Hot and sour soup mix." },
                { id: "p192", name: "Knorr Manchow Soup — 250g", price: 95, cat: "other", img: "", desc: "Chinese manchow soup." },
                { id: "p193", name: "Knorr Chicken Soup (Veg Taste) — 250g", price: 95, cat: "other", img: "", desc: "Veg version of chicken soup." },
                { id: "p194", name: "Everest Chaat Masala — 100g", price: 55, cat: "other", img: "", desc: "Tangy chaat masala." },
                { id: "p195", name: "Everest Garam Masala — 100g", price: 70, cat: "other", img: "", desc: "Blend of Indian spices." },
                { id: "p196", name: "Everest Pav Bhaji Masala — 100g", price: 65, cat: "other", img: "", desc: "Special pav bhaji masala." },
                { id: "p197", name: "Everest Kitchen King Masala — 100g", price: 75, cat: "other", img: "", desc: "Aromatic spice blend." },
                { id: "p198", name: "MDH Chana Masala — 100g", price: 60, cat: "other", img: "", desc: "Famous MDH chana masala." },
                { id: "p199", name: "MDH Kitchen King — 100g", price: 70, cat: "other", img: "", desc: "Balanced spice mix." },
                { id: "p200", name: "MDH Shahi Paneer Masala — 100g", price: 75, cat: "other", img: "", desc: "Special paneer masala." },
                // ===== OTHER (p201 – p250) =====
                { id: "p201", name: "MDH Rajma Masala — 100g", price: 65, cat: "other", img: "", desc: "Spice mix for rajma." },
                { id: "p202", name: "MDH Dal Makhani Masala — 100g", price: 70, cat: "other", img: "", desc: "Flavorful dal makhani masala." },
                { id: "p203", name: "MDH Meat Masala (Veg Taste) — 100g", price: 75, cat: "other", img: "", desc: "Special masala (veg taste)." },
                { id: "p204", name: "MDH Chicken Masala (Veg Taste) — 100g", price: 75, cat: "other", img: "", desc: "Chicken style flavor (veg)." },
                { id: "p205", name: "Everest Sambhar Masala — 100g", price: 70, cat: "other", img: "", desc: "South Indian sambhar masala." },
                { id: "p206", name: "Everest Rasam Powder — 100g", price: 65, cat: "other", img: "", desc: "Spicy rasam masala." },
                { id: "p207", name: "Everest Shahi Biryani Masala — 100g", price: 80, cat: "other", img: "", desc: "Royal biryani masala." },
                { id: "p208", name: "Everest Paneer Butter Masala — 100g", price: 75, cat: "other", img: "", desc: "Paneer butter masala mix." },
                { id: "p209", name: "Everest Fish Curry Masala (Veg Taste) — 100g", price: 75, cat: "other", img: "", desc: "Fish curry style spice blend." },
                { id: "p210", name: "Everest Chicken Masala (Veg Taste) — 100g", price: 75, cat: "other", img: "", desc: "Special chicken masala (veg taste)." },
                { id: "p211", name: "Catch Jeera Powder — 100g", price: 60, cat: "other", img: "", desc: "Ground cumin spice." },
                { id: "p212", name: "Catch Coriander Powder — 100g", price: 55, cat: "other", img: "", desc: "Coriander seed powder." },
                { id: "p213", name: "Catch Red Chilli Powder — 100g", price: 60, cat: "other", img: "", desc: "Hot red chilli powder." },
                { id: "p214", name: "Catch Black Pepper Powder — 100g", price: 90, cat: "other", img: "", desc: "Fresh ground pepper." },
                { id: "p215", name: "Catch Turmeric Powder — 100g", price: 50, cat: "other", img: "", desc: "Natural haldi powder." },
                { id: "p216", name: "Kissan Tomato Ketchup — 1kg", price: 110, cat: "other", img: "", desc: "Rich tomato ketchup." },
                { id: "p217", name: "Maggi Hot & Sweet Sauce — 500g", price: 90, cat: "other", img: "", desc: "Hot & sweet tomato sauce." },
                { id: "p218", name: "Chings Schezwan Chutney — 250g", price: 95, cat: "other", img: "", desc: "Spicy schezwan chutney." },
                { id: "p219", name: "Funfoods Mayonnaise Classic — 250g", price: 85, cat: "other", img: "", desc: "Creamy mayonnaise." },
                { id: "p220", name: "Funfoods Mayonnaise Veg — 250g", price: 85, cat: "other", img: "", desc: "Vegetarian mayonnaise." },
                { id: "p221", name: "Nutella Hazelnut Spread — 350g", price: 350, cat: "other", img: "", desc: "Chocolate hazelnut spread." },
                { id: "p222", name: "Kellogg's Corn Flakes — 475g", price: 180, cat: "other", img: "", desc: "Crispy corn flakes." },
                { id: "p223", name: "Kellogg's Chocos — 375g", price: 190, cat: "other", img: "", desc: "Chocolate flavored cereal." },
                { id: "p224", name: "Kellogg's Muesli Fruit & Nut — 500g", price: 280, cat: "other", img: "", desc: "Nutritious fruit & nut muesli." },
                { id: "p225", name: "Kellogg's Oats — 1kg", price: 150, cat: "other", img: "", desc: "Healthy rolled oats." },
                { id: "p226", name: "Quaker Oats — 1kg", price: 160, cat: "other", img: "", desc: "Nutritious Quaker oats." },
                { id: "p227", name: "Saffola Masala Oats Classic — 500g", price: 210, cat: "other", img: "", desc: "Classic masala oats." },
                { id: "p228", name: "Saffola Masala Oats Veggie Twist — 500g", price: 210, cat: "other", img: "", desc: "Veggie twist oats." },
                { id: "p229", name: "Tata Tea Premium — 1kg", price: 480, cat: "other", img: "", desc: "Strong premium tea." },
                { id: "p230", name: "Red Label Tea — 1kg", price: 470, cat: "other", img: "", desc: "Rich taste tea." },
                { id: "p231", name: "Taj Mahal Tea — 1kg", price: 520, cat: "other", img: "", desc: "Premium tea granules." },
                { id: "p232", name: "Society Tea — 1kg", price: 460, cat: "other", img: "", desc: "Strong flavored tea." },
                { id: "p233", name: "Green Tea Bags (100 pcs)", price: 300, cat: "other", img: "", desc: "Healthy green tea bags." },
                { id: "p234", name: "Lipton Green Tea Honey Lemon — 25 Bags", price: 150, cat: "other", img: "", desc: "Honey lemon flavored green tea." },
                { id: "p235", name: "Bru Instant Coffee — 200g", price: 220, cat: "other", img: "", desc: "Instant coffee powder." },
                { id: "p236", name: "Nescafe Classic Coffee — 200g", price: 230, cat: "other", img: "", desc: "Classic instant coffee." },
                { id: "p237", name: "Nescafe Gold Coffee — 100g", price: 350, cat: "other", img: "", desc: "Premium gold instant coffee." },
                { id: "p238", name: "Horlicks Health Drink — 500g", price: 240, cat: "other", img: "", desc: "Nutritional malt drink." },
                { id: "p239", name: "Bournvita Health Drink — 500g", price: 230, cat: "other", img: "", desc: "Chocolate malt drink." },
                { id: "p240", name: "Complan Nutrition Drink — 500g", price: 250, cat: "other", img: "", desc: "Growth nutrition drink." },
                { id: "p241", name: "Boost Energy Drink — 500g", price: 240, cat: "other", img: "", desc: "Energy nutrition drink." },
                { id: "p242", name: "Pediasure Nutrition Drink — 400g", price: 550, cat: "other", img: "", desc: "Kids nutrition drink." },
                { id: "p243", name: "Protinex Protein Drink — 400g", price: 500, cat: "other", img: "", desc: "Protein nutrition drink." },
                { id: "p244", name: "Tang Orange Instant Drink — 500g", price: 160, cat: "other", img: "", desc: "Refreshing orange drink mix." },
                { id: "p245", name: "Glucon-D Orange Energy Drink — 500g", price: 130, cat: "other", img: "", desc: "Instant energy drink powder." },
                { id: "p246", name: "ORS Hydration Drink — 200g", price: 120, cat: "other", img: "", desc: "Oral rehydration solution powder." },
                { id: "p247", name: "Coca Cola — 2.25L", price: 110, cat: "other", img: "", desc: "Classic cola soft drink." },
                { id: "p248", name: "Pepsi — 2.25L", price: 110, cat: "other", img: "", desc: "Refreshing cola soft drink." },
                { id: "p249", name: "Sprite — 2.25L", price: 110, cat: "other", img: "", desc: "Lemon-lime soft drink." },
                { id: "p250", name: "Fanta — 2.25L", price: 110, cat: "other", img: "", desc: "Orange flavored soft drink." },
                // ===== OTHER (p251 – p300) =====
                { id: "p251", name: "Mountain Dew — 2.25L", price: 110, cat: "other", img: "", desc: "Citrus flavored soft drink." },
                { id: "p252", name: "7UP — 2.25L", price: 110, cat: "other", img: "", desc: "Refreshing lemon soda." },
                { id: "p253", name: "Appy Fizz — 1L", price: 70, cat: "other", img: "", desc: "Sparkling apple drink." },
                { id: "p254", name: "Maaza Mango Drink — 1.2L", price: 65, cat: "other", img: "", desc: "Refreshing mango drink." },
                { id: "p255", name: "Slice Mango Drink — 1.2L", price: 65, cat: "other", img: "", desc: "Delicious mango juice." },
                { id: "p256", name: "Real Orange Juice — 1L", price: 120, cat: "other", img: "", desc: "Refreshing orange juice." },
                { id: "p257", name: "Real Apple Juice — 1L", price: 120, cat: "other", img: "", desc: "Fresh apple juice." },
                { id: "p258", name: "Real Mixed Fruit Juice — 1L", price: 125, cat: "other", img: "", desc: "Delicious mixed fruit juice." },
                { id: "p259", name: "Tropicana Orange Juice — 1L", price: 130, cat: "other", img: "", desc: "100% orange juice." },
                { id: "p260", name: "Tropicana Apple Juice — 1L", price: 130, cat: "other", img: "", desc: "100% apple juice." },
                { id: "p261", name: "Paper Boat Aam Panna — 500ml", price: 60, cat: "other", img: "", desc: "Refreshing aam panna drink." },
                { id: "p262", name: "Paper Boat Jaljeera — 500ml", price: 60, cat: "other", img: "", desc: "Traditional jaljeera drink." },
                { id: "p263", name: "Paper Boat Chilli Guava — 500ml", price: 65, cat: "other", img: "", desc: "Unique chilli guava drink." },
                { id: "p264", name: "Minute Maid Pulpy Orange — 1L", price: 110, cat: "other", img: "", desc: "Pulpy orange juice." },
                { id: "p265", name: "Minute Maid Apple — 1L", price: 110, cat: "other", img: "", desc: "Pulpy apple juice." },
                { id: "p266", name: "Real Cranberry Juice — 1L", price: 160, cat: "other", img: "", desc: "Refreshing cranberry juice." },
                { id: "p267", name: "Real Pomegranate Juice — 1L", price: 160, cat: "other", img: "", desc: "Fresh anaar juice." },
                { id: "p268", name: "Cavin's Milkshake Chocolate — 200ml", price: 40, cat: "other", img: "", desc: "Chocolate flavored milkshake." },
                { id: "p269", name: "Cavin's Milkshake Strawberry — 200ml", price: 40, cat: "other", img: "", desc: "Strawberry flavored milkshake." },
                { id: "p270", name: "Amul Kool Flavored Milk — 200ml", price: 25, cat: "other", img: "", desc: "Refreshing flavored milk." },
                { id: "p271", name: "Amul Lassi — 200ml", price: 25, cat: "other", img: "", desc: "Sweet and refreshing lassi." },
                { id: "p272", name: "Amul Masti Buttermilk — 200ml", price: 20, cat: "other", img: "", desc: "Cool buttermilk drink." },
                { id: "p273", name: "Mother Dairy Lassi — 200ml", price: 25, cat: "other", img: "", desc: "Refreshing dairy lassi." },
                { id: "p274", name: "Mother Dairy Buttermilk — 200ml", price: 20, cat: "other", img: "", desc: "Spiced buttermilk drink." },
                { id: "p275", name: "Britannia Cake Fruity — 150g", price: 40, cat: "other", img: "", desc: "Soft fruity cake." },
                { id: "p276", name: "Britannia Cake Choco — 150g", price: 40, cat: "other", img: "", desc: "Delicious chocolate cake." },
                { id: "p277", name: "Britannia Cake Butter Sponge — 150g", price: 35, cat: "other", img: "", desc: "Soft sponge butter cake." },
                { id: "p278", name: "Britannia Rusk — 300g", price: 60, cat: "other", img: "", desc: "Crispy tea-time rusk." },
                { id: "p279", name: "Parle Rusk — 300g", price: 55, cat: "other", img: "", desc: "Crispy wheat rusk." },
                { id: "p280", name: "Patanjali Doodh Biscuits — 200g", price: 30, cat: "other", img: "", desc: "Milk based biscuits." },
                { id: "p281", name: "Patanjali Marie Biscuits — 200g", price: 28, cat: "other", img: "", desc: "Healthy Marie biscuits." },
                { id: "p282", name: "Oreo Vanilla Cream Biscuits — 120g", price: 35, cat: "other", img: "", desc: "Delicious Oreo cream biscuits." },
                { id: "p283", name: "Oreo Chocolate Cream Biscuits — 120g", price: 35, cat: "other", img: "", desc: "Chocolate cream Oreo biscuits." },
                { id: "p284", name: "Bourbon Chocolate Cream — 150g", price: 35, cat: "other", img: "", desc: "Chocolate sandwich biscuits." },
                { id: "p285", name: "Jim Jam Cream Biscuits — 150g", price: 35, cat: "other", img: "", desc: "Cream filled biscuits." },
                { id: "p286", name: "Hide & Seek Fab Vanilla — 150g", price: 35, cat: "other", img: "", desc: "Vanilla cream biscuits." },
                { id: "p287", name: "Hide & Seek Fab Chocolate — 150g", price: 35, cat: "other", img: "", desc: "Chocolate cream biscuits." },
                { id: "p288", name: "Good Day Pista Badam Cookies — 200g", price: 40, cat: "other", img: "", desc: "Nutty pista badam cookies." },
                { id: "p289", name: "Good Day Choco Chip Cookies — 200g", price: 45, cat: "other", img: "", desc: "Crispy choco chip cookies." },
                { id: "p290", name: "Good Day Butter Cookies — 200g", price: 40, cat: "other", img: "", desc: "Delicious butter cookies." },
                { id: "p291", name: "Sunfeast Dark Fantasy Choco Fills — 75g", price: 40, cat: "other", img: "", desc: "Choco filled cookies." },
                { id: "p292", name: "Sunfeast Dark Fantasy Choco Chip Cookies — 75g", price: 40, cat: "other", img: "", desc: "Chocolate chip cookies." },
                { id: "p293", name: "Perk Chocolate — 20g", price: 10, cat: "other", img: "", desc: "Wafer chocolate bar." },
                { id: "p294", name: "Munch Chocolate — 20g", price: 10, cat: "other", img: "", desc: "Crunchy wafer chocolate." },
                { id: "p295", name: "KitKat — 18g", price: 20, cat: "other", img: "", desc: "Crispy wafer chocolate." },
                { id: "p296", name: "5 Star Chocolate — 40g", price: 25, cat: "other", img: "", desc: "Caramel filled chocolate." },
                { id: "p297", name: "Dairy Milk Silk Chocolate — 150g", price: 160, cat: "other", img: "", desc: "Silky smooth chocolate." },
                { id: "p298", name: "Dairy Milk Crackle Chocolate — 40g", price: 45, cat: "other", img: "", desc: "Crispy crackle chocolate." },
                { id: "p299", name: "Dairy Milk Fruit & Nut — 80g", price: 90, cat: "other", img: "", desc: "Fruit and nut chocolate." },
                { id: "p300", name: "Dairy Milk Roast Almond — 80g", price: 90, cat: "other", img: "", desc: "Roasted almond chocolate." },
                // ===== OTHER (p301 – p350) =====
                { id: "p301", name: "Nutella Hazelnut Spread — 180g", price: 325, cat: "other", img: "", desc: "Creamy hazelnut cocoa spread." },
                { id: "p302", name: "Kissan Mixed Fruit Jam — 500g", price: 170, cat: "other", img: "", desc: "Delicious mixed fruit jam." },
                { id: "p303", name: "Kissan Mango Jam — 500g", price: 160, cat: "other", img: "", desc: "Sweet mango jam." },
                { id: "p304", name: "Kissan Pineapple Jam — 500g", price: 160, cat: "other", img: "", desc: "Tangy pineapple jam." },
                { id: "p305", name: "Dr. Oetker Mayonnaise — 250g", price: 120, cat: "other", img: "", desc: "Rich and creamy mayo." },
                { id: "p306", name: "Veeba Burger Mayo — 250g", price: 110, cat: "other", img: "", desc: "Perfect burger mayonnaise." },
                { id: "p307", name: "FunFoods Sandwich Spread — 250g", price: 115, cat: "other", img: "", desc: "Tangy sandwich spread." },
                { id: "p308", name: "Hershey’s Chocolate Syrup — 623g", price: 220, cat: "other", img: "", desc: "Rich chocolate syrup." },
                { id: "p309", name: "Hershey’s Strawberry Syrup — 623g", price: 220, cat: "other", img: "", desc: "Sweet strawberry syrup." },
                { id: "p310", name: "Mapro Strawberry Crush — 750ml", price: 280, cat: "other", img: "", desc: "Strawberry flavored crush." },
                { id: "p311", name: "Mapro Mango Crush — 750ml", price: 270, cat: "other", img: "", desc: "Mango flavored crush." },
                { id: "p312", name: "Mapro Pineapple Crush — 750ml", price: 260, cat: "other", img: "", desc: "Pineapple flavored crush." },
                { id: "p313", name: "Rasna Mango Instant Drink — 750g", price: 160, cat: "other", img: "", desc: "Instant mango flavored drink mix." },
                { id: "p314", name: "Rasna Orange Instant Drink — 750g", price: 160, cat: "other", img: "", desc: "Refreshing orange drink mix." },
                { id: "p315", name: "Kellogg’s Corn Flakes — 875g", price: 340, cat: "other", img: "", desc: "Classic breakfast cornflakes." },
                { id: "p316", name: "Kellogg’s Chocos — 700g", price: 350, cat: "other", img: "", desc: "Chocolatey cereal for kids." },
                { id: "p317", name: "Kellogg’s Muesli Fruit Magic — 500g", price: 390, cat: "other", img: "", desc: "Nutritious fruit muesli." },
                { id: "p318", name: "Kellogg’s Muesli Nut Delight — 500g", price: 410, cat: "other", img: "", desc: "Healthy nut-rich muesli." },
                { id: "p319", name: "Bagrry’s Crunchy Muesli — 500g", price: 365, cat: "other", img: "", desc: "Crunchy breakfast muesli." },
                { id: "p320", name: "Quaker Oats — 1kg", price: 170, cat: "other", img: "", desc: "Nutritious rolled oats." },
                { id: "p321", name: "Saffola Masala Oats — 500g", price: 210, cat: "other", img: "", desc: "Instant masala flavored oats." },
                { id: "p322", name: "Maggi Noodles — 560g", price: 75, cat: "other", img: "", desc: "Classic 2-minute noodles." },
                { id: "p323", name: "Top Ramen Noodles — 420g", price: 60, cat: "other", img: "", desc: "Tasty instant noodles." },
                { id: "p324", name: "Yippee Noodles — 420g", price: 65, cat: "other", img: "", desc: "Long tasty noodles." },
                { id: "p325", name: "Knorr Soupy Noodles — 420g", price: 70, cat: "other", img: "", desc: "Instant soupy noodles." },
                { id: "p326", name: "Maggi Masala-e-Magic — 12g", price: 5, cat: "other", img: "", desc: "Special spice blend for curries." },
                { id: "p327", name: "Everest Chole Masala — 100g", price: 68, cat: "other", img: "", desc: "Aromatic chole masala." },
                { id: "p328", name: "Everest Pav Bhaji Masala — 100g", price: 72, cat: "other", img: "", desc: "Tasty pav bhaji masala." },
                { id: "p329", name: "MDH Kitchen King Masala — 100g", price: 80, cat: "other", img: "", desc: "Flavorful spice mix." },
                { id: "p330", name: "MDH Chicken Masala (Veg Alternative) — 100g", price: 85, cat: "other", img: "", desc: "Spice blend for curries." },
                { id: "p331", name: "Catch Black Pepper Powder — 100g", price: 95, cat: "other", img: "", desc: "Fine black pepper powder." },
                { id: "p332", name: "Catch Red Chilli Powder — 100g", price: 80, cat: "other", img: "", desc: "Pure red chilli powder." },
                { id: "p333", name: "Catch Turmeric Powder — 100g", price: 70, cat: "other", img: "", desc: "Natural turmeric powder." },
                { id: "p334", name: "Catch Coriander Powder — 100g", price: 75, cat: "other", img: "", desc: "Aromatic coriander powder." },
                { id: "p335", name: "Tata Salt Iodized — 1kg", price: 28, cat: "other", img: "", desc: "Refined iodized salt." },
                { id: "p336", name: "Tata Rock Salt — 1kg", price: 70, cat: "other", img: "", desc: "Natural rock salt." },
                { id: "p337", name: "Aashirvaad Atta — 10kg", price: 430, cat: "other", img: "", desc: "Whole wheat flour." },
                { id: "p338", name: "Fortune Chakki Fresh Atta — 10kg", price: 420, cat: "other", img: "", desc: "Fresh chakki atta." },
                { id: "p339", name: "India Gate Basmati Rice — 5kg", price: 600, cat: "other", img: "", desc: "Premium basmati rice." },
                { id: "p340", name: "Daawat Biryani Basmati Rice — 5kg", price: 640, cat: "other", img: "", desc: "Long grain basmati rice." },
                { id: "p341", name: "Saffola Gold Oil — 5L", price: 900, cat: "other", img: "", desc: "Blended cooking oil." },
                { id: "p342", name: "Fortune Sunlite Oil — 5L", price: 880, cat: "other", img: "", desc: "Refined sunflower oil." },
                { id: "p343", name: "Gemini Refined Soyabean Oil — 5L", price: 850, cat: "other", img: "", desc: "Refined soybean oil." },
                { id: "p344", name: "Amul Pure Ghee — 1L", price: 550, cat: "other", img: "", desc: "Pure cow ghee." },
                { id: "p345", name: "Patanjali Cow Ghee — 1L", price: 520, cat: "other", img: "", desc: "Natural cow ghee." },
                { id: "p346", name: "Nandini Pure Ghee — 1L", price: 500, cat: "other", img: "", desc: "Premium dairy ghee." },
                { id: "p347", name: "Mother Dairy Paneer — 200g", price: 90, cat: "other", img: "", desc: "Fresh paneer cubes." },
                { id: "p348", name: "Amul Paneer — 200g", price: 85, cat: "other", img: "", desc: "Soft and fresh paneer." },
                { id: "p349", name: "Britannia Cheese Slices — 200g", price: 130, cat: "other", img: "", desc: "Processed cheese slices." },
                { id: "p350", name: "Amul Cheese Cubes — 200g", price: 135, cat: "other", img: "", desc: "Delicious cheese cubes." },
                // ===== OTHER (p351 – p400) =====
                { id: "p351", name: "Parle-G Biscuits — 800g", price: 90, cat: "other", img: "", desc: "Glucose biscuits." },
                { id: "p352", name: "Marie Gold Biscuits — 600g", price: 85, cat: "other", img: "", desc: "Light tea-time biscuits." },
                { id: "p353", name: "Good Day Butter Cookies — 600g", price: 120, cat: "other", img: "", desc: "Buttery cookies." },
                { id: "p354", name: "Hide & Seek Fab Chocolate — 200g", price: 60, cat: "other", img: "", desc: "Choco-filled biscuits." },
                { id: "p355", name: "Bourbon Biscuits — 500g", price: 95, cat: "other", img: "", desc: "Cream filled biscuits." },
                { id: "p356", name: "Oreo Original Biscuits — 300g", price: 70, cat: "other", img: "", desc: "Chocolate cream biscuits." },
                { id: "p357", name: "Jim Jam Biscuits — 200g", price: 50, cat: "other", img: "", desc: "Cream biscuits with jam." },
                { id: "p358", name: "Perk Chocolate — 27g", price: 10, cat: "other", img: "", desc: "Wafer chocolate bar." },
                { id: "p359", name: "Munch Chocolate — 27g", price: 10, cat: "other", img: "", desc: "Crunchy wafer chocolate." },
                { id: "p360", name: "KitKat Chocolate — 35g", price: 20, cat: "other", img: "", desc: "Wafer chocolate fingers." },
                { id: "p361", name: "Dairy Milk Chocolate — 50g", price: 40, cat: "other", img: "", desc: "Classic Cadbury chocolate." },
                { id: "p362", name: "5 Star Chocolate — 40g", price: 30, cat: "other", img: "", desc: "Chewy caramel chocolate." },
                { id: "p363", name: "Fuse Chocolate — 25g", price: 20, cat: "other", img: "", desc: "Chocolate with nuts." },
                { id: "p364", name: "Snickers Chocolate — 45g", price: 50, cat: "other", img: "", desc: "Peanut-filled chocolate bar." },
                { id: "p365", name: "Mars Chocolate — 51g", price: 55, cat: "other", img: "", desc: "Caramel nougat chocolate." },
                { id: "p366", name: "Bounty Chocolate — 57g", price: 60, cat: "other", img: "", desc: "Coconut filled chocolate." },
                { id: "p367", name: "Toblerone Chocolate — 100g", price: 250, cat: "other", img: "", desc: "Swiss triangular chocolate." },
                { id: "p368", name: "Ferrero Rocher — 200g", price: 550, cat: "other", img: "", desc: "Premium hazelnut chocolate." },
                { id: "p369", name: "Amul Dark Chocolate — 150g", price: 100, cat: "other", img: "", desc: "Rich dark chocolate." },
                { id: "p370", name: "Amul Fruit & Nut Chocolate — 150g", price: 120, cat: "other", img: "", desc: "Fruit and nut chocolate." },
                { id: "p371", name: "Cadbury Gems — 30g", price: 10, cat: "other", img: "", desc: "Colorful chocolate buttons." },
                { id: "p372", name: "Loacker Wafer Chocolate — 175g", price: 250, cat: "other", img: "", desc: "Crispy wafer chocolate." },
                { id: "p373", name: "KitKat Dessert Delight — 50g", price: 45, cat: "other", img: "", desc: "Premium KitKat flavor." },
                { id: "p374", name: "Perugina Dark Chocolate — 100g", price: 320, cat: "other", img: "", desc: "Italian dark chocolate." },
                { id: "p375", name: "Lindt Swiss Classic — 100g", price: 350, cat: "other", img: "", desc: "Premium Swiss chocolate." },
                { id: "p376", name: "Lindt Excellence 70% Cocoa — 100g", price: 375, cat: "other", img: "", desc: "Dark chocolate bar." },
                { id: "p377", name: "Belgian Seashells Chocolate — 250g", price: 600, cat: "other", img: "", desc: "Assorted seashell chocolates." },
                { id: "p378", name: "Lotus Biscoff Biscuits — 250g", price: 280, cat: "other", img: "", desc: "Caramelized biscuits." },
                { id: "p379", name: "Britannia Rusk — 560g", price: 85, cat: "other", img: "", desc: "Crispy tea rusks." },
                { id: "p380", name: "Sunfeast Dark Fantasy Choco Fills — 300g", price: 160, cat: "other", img: "", desc: "Chocolate filled cookies." },
                { id: "p381", name: "Unibic Choco Chip Cookies — 500g", price: 180, cat: "other", img: "", desc: "Choco chip cookies." },
                { id: "p382", name: "McVitie’s Digestive Biscuits — 400g", price: 130, cat: "other", img: "", desc: "Healthy digestive biscuits." },
                { id: "p383", name: "Haldiram’s Soan Papdi — 500g", price: 180, cat: "other", img: "", desc: "Traditional Indian sweet." },
                { id: "p384", name: "Haldiram’s Gulab Jamun Tin — 1kg", price: 220, cat: "other", img: "", desc: "Soft gulab jamun." },
                { id: "p385", name: "Haldiram’s Rasgulla Tin — 1kg", price: 210, cat: "other", img: "", desc: "Delicious rasgulla." },
                { id: "p386", name: "Bikaji Bhujia — 1kg", price: 240, cat: "other", img: "", desc: "Crispy bhujia." },
                { id: "p387", name: "Bikaji Aloo Bhujia — 1kg", price: 250, cat: "other", img: "", desc: "Tangy aloo bhujia." },
                { id: "p388", name: "Bikaji Moong Dal — 1kg", price: 260, cat: "other", img: "", desc: "Fried moong dal snack." },
                { id: "p389", name: "Haldiram’s Khatta Meetha — 1kg", price: 270, cat: "other", img: "", desc: "Sweet and sour mix." },
                { id: "p390", name: "Haldiram’s Navratan Mixture — 1kg", price: 280, cat: "other", img: "", desc: "Spicy crunchy mixture." },
                { id: "p391", name: "Haldiram’s Chivda — 1kg", price: 230, cat: "other", img: "", desc: "Crispy chivda mix." },
                { id: "p392", name: "Haldiram’s Bhel Puri — 1kg", price: 260, cat: "other", img: "", desc: "Ready to eat bhel puri." },
                { id: "p393", name: "Pringles Original Chips — 110g", price: 120, cat: "other", img: "", desc: "Crispy potato chips." },
                { id: "p394", name: "Pringles Sour Cream & Onion — 110g", price: 130, cat: "other", img: "", desc: "Flavored potato chips." },
                { id: "p395", name: "Lays Classic Salted Chips — 90g", price: 50, cat: "other", img: "", desc: "Salted potato chips." },
                { id: "p396", name: "Lays Magic Masala Chips — 90g", price: 50, cat: "other", img: "", desc: "Spicy masala chips." },
                { id: "p397", name: "Kurkure Masala Munch — 120g", price: 20, cat: "other", img: "", desc: "Crunchy spicy snack." },
                { id: "p398", name: "Kurkure Green Chutney Rajasthani — 120g", price: 20, cat: "other", img: "", desc: "Tangy flavored snack." },
                { id: "p399", name: "Uncle Chipps Spicy Treat — 90g", price: 40, cat: "other", img: "", desc: "Classic spicy chips." },
                { id: "p400", name: "Balaji Wafers Masala — 90g", price: 35, cat: "other", img: "", desc: "Tasty potato wafers." },
                // ===== OTHER (p401 – p450) =====
                { id: "p401", name: "Maggi 2-Minute Noodles — 70g", price: 15, cat: "other", img: "", desc: "Instant noodles." },
                { id: "p402", name: "Maggi Masala Pack — 12x70g", price: 150, cat: "other", img: "", desc: "Family pack noodles." },
                { id: "p403", name: "Top Ramen Masala Noodles — 280g", price: 50, cat: "other", img: "", desc: "Instant ramen noodles." },
                { id: "p404", name: "Yippee Noodles Magic Masala — 280g", price: 55, cat: "other", img: "", desc: "Long, non-sticky noodles." },
                { id: "p405", name: "Knorr Soupy Noodles — 75g", price: 20, cat: "other", img: "", desc: "Soupy style noodles." },
                { id: "p406", name: "Ching’s Secret Hakka Noodles — 150g", price: 30, cat: "other", img: "", desc: "Chinese style noodles." },
                { id: "p407", name: "Wai Wai Instant Noodles — 75g", price: 25, cat: "other", img: "", desc: "Ready-to-eat noodles." },
                { id: "p408", name: "Pasta Penne — 500g", price: 120, cat: "other", img: "", desc: "Durum wheat pasta." },
                { id: "p409", name: "Pasta Fusilli — 500g", price: 125, cat: "other", img: "", desc: "Spiral pasta." },
                { id: "p410", name: "Spaghetti Pasta — 500g", price: 130, cat: "other", img: "", desc: "Classic spaghetti pasta." },
                { id: "p411", name: "Macaroni Pasta — 500g", price: 110, cat: "other", img: "", desc: "Elbow macaroni pasta." },
                { id: "p412", name: "Cheese Spread — 200g", price: 90, cat: "other", img: "", desc: "Creamy cheese spread." },
                { id: "p413", name: "Mayonnaise — 250g", price: 85, cat: "other", img: "", desc: "Classic mayo." },
                { id: "p414", name: "Tomato Ketchup — 1kg", price: 120, cat: "other", img: "", desc: "Rich tomato ketchup." },
                { id: "p415", name: "Green Chilli Sauce — 200g", price: 60, cat: "other", img: "", desc: "Spicy chilli sauce." },
                { id: "p416", name: "Soy Sauce — 200ml", price: 65, cat: "other", img: "", desc: "Authentic soy sauce." },
                { id: "p417", name: "Vinegar — 500ml", price: 50, cat: "other", img: "", desc: "Synthetic vinegar." },
                { id: "p418", name: "Pizza Sauce — 200g", price: 90, cat: "other", img: "", desc: "Ready-to-use pizza sauce." },
                { id: "p419", name: "Pasta Sauce — 200g", price: 95, cat: "other", img: "", desc: "Italian pasta sauce." },
                { id: "p420", name: "Red Chilli Flakes — 100g", price: 60, cat: "other", img: "", desc: "Seasoning chilli flakes." },
                { id: "p421", name: "Oregano Seasoning — 100g", price: 70, cat: "other", img: "", desc: "Italian herb seasoning." },
                { id: "p422", name: "Black Pepper Powder — 100g", price: 120, cat: "other", img: "", desc: "Ground black pepper." },
                { id: "p423", name: "Turmeric Powder — 200g", price: 60, cat: "other", img: "", desc: "Pure haldi powder." },
                { id: "p424", name: "Coriander Powder — 200g", price: 65, cat: "other", img: "", desc: "Ground coriander." },
                { id: "p425", name: "Red Chilli Powder — 200g", price: 70, cat: "other", img: "", desc: "Spicy chilli powder." },
                { id: "p426", name: "Garam Masala — 100g", price: 80, cat: "other", img: "", desc: "Aromatic Indian spices." },
                { id: "p427", name: "Chaat Masala — 100g", price: 50, cat: "other", img: "", desc: "Tangy spice mix." },
                { id: "p428", name: "Cumin Seeds — 200g", price: 90, cat: "other", img: "", desc: "Whole jeera." },
                { id: "p429", name: "Mustard Seeds — 200g", price: 80, cat: "other", img: "", desc: "Sarson seeds." },
                { id: "p430", name: "Fennel Seeds — 200g", price: 70, cat: "other", img: "", desc: "Saunf seeds." },
                { id: "p431", name: "Fenugreek Seeds — 200g", price: 60, cat: "other", img: "", desc: "Methi dana." },
                { id: "p432", name: "Cardamom — 50g", price: 250, cat: "other", img: "", desc: "Elaichi pods." },
                { id: "p433", name: "Cloves — 50g", price: 180, cat: "other", img: "", desc: "Laung spice." },
                { id: "p434", name: "Cinnamon Sticks — 100g", price: 150, cat: "other", img: "", desc: "Dalchini sticks." },
                { id: "p435", name: "Bay Leaves — 50g", price: 40, cat: "other", img: "", desc: "Tej patta leaves." },
                { id: "p436", name: "Nutmeg — 50g", price: 160, cat: "other", img: "", desc: "Jaiphal spice." },
                { id: "p437", name: "Mace (Javitri) — 25g", price: 200, cat: "other", img: "", desc: "Exotic spice." },
                { id: "p438", name: "Dry Ginger Powder — 100g", price: 90, cat: "other", img: "", desc: "Sonth powder." },
                { id: "p439", name: "Kasuri Methi — 100g", price: 70, cat: "other", img: "", desc: "Dried fenugreek leaves." },
                { id: "p440", name: "Poha — 500g", price: 60, cat: "other", img: "", desc: "Flattened rice flakes." },
                { id: "p441", name: "Sabudana — 500g", price: 70, cat: "other", img: "", desc: "Tapioca pearls." },
                { id: "p442", name: "Dalia (Broken Wheat) — 500g", price: 60, cat: "other", img: "", desc: "Healthy porridge grain." },
                { id: "p443", name: "Ragi Flour — 500g", price: 80, cat: "other", img: "", desc: "Nutritious millet flour." },
                { id: "p444", name: "Jowar Flour — 500g", price: 70, cat: "other", img: "", desc: "Sorghum millet flour." },
                { id: "p445", name: "Bajra Flour — 500g", price: 65, cat: "other", img: "", desc: "Pearl millet flour." },
                { id: "p446", name: "Multigrain Atta — 5kg", price: 300, cat: "other", img: "", desc: "Healthy multigrain flour." },
                { id: "p447", name: "Besan (Gram Flour) — 1kg", price: 90, cat: "other", img: "", desc: "Chickpea flour." },
                { id: "p448", name: "Suji (Rava) — 1kg", price: 85, cat: "other", img: "", desc: "Semolina for idli/upma." },
                { id: "p449", name: "Maida (Refined Flour) — 1kg", price: 60, cat: "other", img: "", desc: "Refined wheat flour." },
                { id: "p450", name: "Rice Flour — 1kg", price: 70, cat: "other", img: "", desc: "Finely ground rice flour." },
                // ===== OTHER (p451 – p500) =====
                { id: "p451", name: "Wheat Flour (Atta) — 5kg", price: 250, cat: "other", img: "", desc: "Whole wheat flour." },
                { id: "p452", name: "Brown Rice — 5kg", price: 450, cat: "other", img: "", desc: "Nutritious brown rice." },
                { id: "p453", name: "Basmati Rice — 5kg", price: 600, cat: "other", img: "", desc: "Premium basmati rice." },
                { id: "p454", name: "Idli Rice — 5kg", price: 550, cat: "other", img: "", desc: "Rice for soft idlis." },
                { id: "p455", name: "Matta Rice — 5kg", price: 500, cat: "other", img: "", desc: "Kerala red rice." },
                { id: "p456", name: "Puffed Rice (Murmura) — 500g", price: 70, cat: "other", img: "", desc: "Light puffed rice." },
                { id: "p457", name: "Chivda Mix — 500g", price: 120, cat: "other", img: "", desc: "Crispy poha chivda." },
                { id: "p458", name: "Sev Namkeen — 500g", price: 150, cat: "other", img: "", desc: "Crunchy sev namkeen." },
                { id: "p459", name: "Bhujia Namkeen — 500g", price: 160, cat: "other", img: "", desc: "Spicy bhujia sev." },
                { id: "p460", name: "Moong Dal Namkeen — 500g", price: 180, cat: "other", img: "", desc: "Crispy moong dal." },
                { id: "p461", name: "Masala Peanuts — 500g", price: 200, cat: "other", img: "", desc: "Spiced peanuts snack." },
                { id: "p462", name: "Potato Chips — 200g", price: 90, cat: "other", img: "", desc: "Crunchy potato chips." },
                { id: "p463", name: "Banana Chips — 200g", price: 95, cat: "other", img: "", desc: "Crispy banana chips." },
                { id: "p464", name: "Nachos — 200g", price: 120, cat: "other", img: "", desc: "Tortilla nachos chips." },
                { id: "p465", name: "Popcorn — 200g", price: 100, cat: "other", img: "", desc: "Ready-to-cook popcorn." },
                { id: "p466", name: "Instant Upma Mix — 200g", price: 80, cat: "other", img: "", desc: "Quick upma mix." },
                { id: "p467", name: "Instant Poha Mix — 200g", price: 85, cat: "other", img: "", desc: "Ready poha mix." },
                { id: "p468", name: "Instant Dosa Mix — 500g", price: 150, cat: "other", img: "", desc: "Quick dosa mix." },
                { id: "p469", name: "Instant Idli Mix — 500g", price: 150, cat: "other", img: "", desc: "Ready idli mix." },
                { id: "p470", name: "Pav Bhaji Masala — 100g", price: 70, cat: "other", img: "", desc: "Spicy pav bhaji masala." },
                { id: "p471", name: "Chhole Masala — 100g", price: 65, cat: "other", img: "", desc: "Delicious chhole mix." },
                { id: "p472", name: "Sambar Powder — 100g", price: 60, cat: "other", img: "", desc: "South Indian sambar masala." },
                { id: "p473", name: "Rasam Powder — 100g", price: 60, cat: "other", img: "", desc: "Tangy rasam masala." },
                { id: "p474", name: "Biryani Masala — 100g", price: 80, cat: "other", img: "", desc: "Spicy biryani mix." },
                { id: "p475", name: "Kitchen King Masala — 100g", price: 85, cat: "other", img: "", desc: "All-purpose masala." },
                { id: "p476", name: "Black Salt — 200g", price: 40, cat: "other", img: "", desc: "Kala namak." },
                { id: "p477", name: "Rock Salt — 200g", price: 45, cat: "other", img: "", desc: "Sendha namak." },
                { id: "p478", name: "Sugar Candy (Mishri) — 200g", price: 50, cat: "other", img: "", desc: "Crystal mishri." },
                { id: "p479", name: "Jaggery (Gur) — 1kg", price: 90, cat: "other", img: "", desc: "Natural jaggery." },
                { id: "p480", name: "Liquid Jaggery — 500ml", price: 100, cat: "other", img: "", desc: "Golden liquid jaggery." },
                { id: "p481", name: "Gulab Jamun Mix — 200g", price: 90, cat: "other", img: "", desc: "Sweet gulab jamun mix." },
                { id: "p482", name: "Jalebi Mix — 200g", price: 85, cat: "other", img: "", desc: "Crispy jalebi mix." },
                { id: "p483", name: "Ice Cream Mix — 200g", price: 95, cat: "other", img: "", desc: "Creamy ice cream mix." },
                { id: "p484", name: "Falooda Mix — 200g", price: 100, cat: "other", img: "", desc: "Refreshing falooda mix." },
                { id: "p485", name: "Kheer Mix — 200g", price: 110, cat: "other", img: "", desc: "Ready kheer mix." },
                { id: "p486", name: "Custard Powder — 200g", price: 80, cat: "other", img: "", desc: "Vanilla custard powder." },
                { id: "p487", name: "Cocoa Powder — 200g", price: 150, cat: "other", img: "", desc: "Rich cocoa powder." },
                { id: "p488", name: "Drinking Chocolate — 200g", price: 160, cat: "other", img: "", desc: "Sweet chocolate drink mix." },
                { id: "p489", name: "Horlicks — 500g", price: 220, cat: "other", img: "", desc: "Health drink powder." },
                { id: "p490", name: "Bournvita — 500g", price: 230, cat: "other", img: "", desc: "Chocolate health drink." },
                { id: "p491", name: "Complan — 500g", price: 240, cat: "other", img: "", desc: "Complete health drink." },
                { id: "p492", name: "Boost — 500g", price: 250, cat: "other", img: "", desc: "Energy health drink." },
                { id: "p493", name: "Maltova — 500g", price: 200, cat: "other", img: "", desc: "Malted food drink." },
                { id: "p494", name: "Ovaltine — 500g", price: 260, cat: "other", img: "", desc: "Delicious malt drink." },
                { id: "p495", name: "Thums Up — 2.25L", price: 90, cat: "other", img: "", desc: "Strong cola soft drink." },
                { id: "p496", name: "Coca Cola — 2.25L", price: 90, cat: "other", img: "", desc: "Refreshing cola drink." },
                { id: "p497", name: "Pepsi — 2.25L", price: 90, cat: "other", img: "", desc: "Popular cola beverage." },
                { id: "p498", name: "Sprite — 2.25L", price: 85, cat: "other", img: "", desc: "Refreshing lemon soda." },
                { id: "p499", name: "Fanta — 2.25L", price: 85, cat: "other", img: "", desc: "Orange soft drink." },
                { id: "p500", name: "7Up — 2.25L", price: 85, cat: "other", img: "", desc: "Clear lime soda drink." },
                // ===== OTHER (p501 – p550) =====
                { id: "p501", name: "Parle-G Biscuits — 800g", price: 90, cat: "other", img: "", desc: "Classic glucose biscuits." },
                { id: "p502", name: "Good Day Butter Cookies — 600g", price: 150, cat: "other", img: "", desc: "Crunchy butter cookies." },
                { id: "p503", name: "Hide & Seek Fab Choco — 600g", price: 180, cat: "other", img: "", desc: "Chocolate cream biscuits." },
                { id: "p504", name: "Jim Jam Cream Biscuits — 600g", price: 160, cat: "other", img: "", desc: "Cream-filled biscuits." },
                { id: "p505", name: "Oreo Choco Creme — 600g", price: 190, cat: "other", img: "", desc: "Choco cream sandwich biscuits." },
                { id: "p506", name: "Marie Gold Biscuits — 600g", price: 120, cat: "other", img: "", desc: "Crispy light tea biscuits." },
                { id: "p507", name: "Bourbon Cream Biscuits — 600g", price: 170, cat: "other", img: "", desc: "Choco bourbon cream." },
                { id: "p508", name: "KrackJack Biscuits — 600g", price: 150, cat: "other", img: "", desc: "Sweet & salty biscuits." },
                { id: "p509", name: "Monaco Biscuits — 600g", price: 140, cat: "other", img: "", desc: "Salty crunchy biscuits." },
                { id: "p510", name: "Treat Choco Chip Cookies — 600g", price: 180, cat: "other", img: "", desc: "Cookies with chocolate chips." },
                { id: "p511", name: "Sunfeast Mom’s Magic Cashew — 600g", price: 200, cat: "other", img: "", desc: "Cashew flavored cookies." },
                { id: "p512", name: "Perk Chocolate Pack — 10 pcs", price: 100, cat: "other", img: "", desc: "Wafer chocolate." },
                { id: "p513", name: "KitKat Chocolate Pack — 12 pcs", price: 240, cat: "other", img: "", desc: "Crispy wafer chocolate." },
                { id: "p514", name: "Munch Chocolate Pack — 12 pcs", price: 120, cat: "other", img: "", desc: "Wafer bar with choco." },
                { id: "p515", name: "5 Star Chocolate — 12 pcs", price: 150, cat: "other", img: "", desc: "Caramel filled chocolate bar." },
                { id: "p516", name: "Dairy Milk Silk — 150g", price: 180, cat: "other", img: "", desc: "Smooth milk chocolate." },
                { id: "p517", name: "Dark Fantasy Choco Fills — 300g", price: 160, cat: "other", img: "", desc: "Cookies filled with choco." },
                { id: "p518", name: "Ferrero Rocher — 200g", price: 600, cat: "other", img: "", desc: "Premium hazelnut chocolate." },
                { id: "p519", name: "Toblerone — 200g", price: 500, cat: "other", img: "", desc: "Swiss triangular chocolate." },
                { id: "p520", name: "Lindt Dark Chocolate — 200g", price: 700, cat: "other", img: "", desc: "Premium Swiss chocolate." },
                { id: "p521", name: "Amul Dark Chocolate — 150g", price: 120, cat: "other", img: "", desc: "Indian dark chocolate." },
                { id: "p522", name: "Hershey’s Kisses — 200g", price: 350, cat: "other", img: "", desc: "Chocolate drops." },
                { id: "p523", name: "Hershey’s Syrup Chocolate — 623g", price: 250, cat: "other", img: "", desc: "Chocolate flavored syrup." },
                { id: "p524", name: "Nutella Hazelnut Spread — 350g", price: 450, cat: "other", img: "", desc: "Hazelnut choco spread." },
                { id: "p525", name: "Peanut Butter — 500g", price: 220, cat: "other", img: "", desc: "Creamy peanut butter." },
                { id: "p526", name: "Choco Spread — 500g", price: 210, cat: "other", img: "", desc: "Chocolate flavored spread." },
                { id: "p527", name: "Jam Mixed Fruit — 500g", price: 180, cat: "other", img: "", desc: "Mixed fruit jam." },
                { id: "p528", name: "Strawberry Jam — 500g", price: 190, cat: "other", img: "", desc: "Sweet strawberry jam." },
                { id: "p529", name: "Orange Marmalade — 500g", price: 200, cat: "other", img: "", desc: "Tangy orange marmalade." },
                { id: "p530", name: "Pineapple Jam — 500g", price: 200, cat: "other", img: "", desc: "Tropical pineapple jam." },
                { id: "p531", name: "Kissan Tomato Ketchup — 1kg", price: 130, cat: "other", img: "", desc: "Popular tomato ketchup." },
                { id: "p532", name: "Maggi Hot & Sweet Sauce — 500g", price: 120, cat: "other", img: "", desc: "Hot & sweet sauce." },
                { id: "p533", name: "Schezwan Sauce — 500g", price: 150, cat: "other", img: "", desc: "Spicy schezwan chutney." },
                { id: "p534", name: "Green Chilli Sauce — 500g", price: 140, cat: "other", img: "", desc: "Spicy green chilli sauce." },
                { id: "p535", name: "Soy Sauce — 500ml", price: 160, cat: "other", img: "", desc: "Dark soy sauce." },
                { id: "p536", name: "Vinegar — 500ml", price: 80, cat: "other", img: "", desc: "White vinegar." },
                { id: "p537", name: "Mayonnaise — 500g", price: 180, cat: "other", img: "", desc: "Creamy mayo spread." },
                { id: "p538", name: "Pizza Pasta Sauce — 500g", price: 170, cat: "other", img: "", desc: "Italian pizza pasta sauce." },
                { id: "p539", name: "Mustard Sauce — 200g", price: 160, cat: "other", img: "", desc: "Tangy mustard sauce." },
                { id: "p540", name: "Cheese Spread — 200g", price: 150, cat: "other", img: "", desc: "Cheesy sandwich spread." },
                { id: "p541", name: "Butter — 500g", price: 250, cat: "other", img: "", desc: "Creamy dairy butter." },
                { id: "p542", name: "Paneer — 500g", price: 220, cat: "other", img: "", desc: "Fresh cottage cheese." },
                { id: "p543", name: "Cheddar Cheese Block — 500g", price: 300, cat: "other", img: "", desc: "Cheddar cheese block." },
                { id: "p544", name: "Mozzarella Cheese — 500g", price: 320, cat: "other", img: "", desc: "Perfect for pizzas." },
                { id: "p545", name: "Cheese Slices — 200g", price: 180, cat: "other", img: "", desc: "Processed cheese slices." },
                { id: "p546", name: "Milk Powder — 500g", price: 250, cat: "other", img: "", desc: "Dairy milk powder." },
                { id: "p547", name: "Condensed Milk — 400g", price: 140, cat: "other", img: "", desc: "Sweetened condensed milk." },
                { id: "p548", name: "Evaporated Milk — 400g", price: 150, cat: "other", img: "", desc: "Rich evaporated milk." },
                { id: "p549", name: "Whipped Cream Powder — 200g", price: 160, cat: "other", img: "", desc: "Whipping cream mix." },
                { id: "p550", name: "Ice Cream Vanilla — 500ml", price: 180, cat: "other", img: "", desc: "Creamy vanilla ice cream." },


            ];

            /* ---------------------------- Storage keys ------------------------------ */
            const PROD_KEY = 'apna_products_v1';
            const CART_KEY = 'apna_cart_v1';
            const WISH_KEY = 'apna_wish_v1';

            /* ---------------------------- Helpers ---------------------------------- */
            const $ = sel => document.querySelector(sel);
            const $$ = sel => Array.from(document.querySelectorAll(sel));
            function q(id) { return document.getElementById(id); }
            function saveProducts(arr) { localStorage.setItem(PROD_KEY, JSON.stringify(arr)); }
            function loadProducts() { try { return JSON.parse(localStorage.getItem(PROD_KEY)) || SAMPLE_PRODUCTS.slice(); } catch (e) { return SAMPLE_PRODUCTS.slice(); } }
            function saveCart(cart) { localStorage.setItem(CART_KEY, JSON.stringify(cart)); updateCartBadge(); }
            function loadCart() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch (e) { return {}; } }
            function saveWish(w) { localStorage.setItem(WISH_KEY, JSON.stringify(w)); updateWishBadge(); }
            function loadWish() { try { return JSON.parse(localStorage.getItem(WISH_KEY)) || {}; } catch (e) { return {}; } }

            /* ---------------------------- App state -------------------------------- */
            let PRODUCTS = loadProducts();
            let filtered = PRODUCTS.slice();
            let activeCat = 'all';
            let perPage = parseInt($('#perPage').value || 12);
            let page = 1;

            /* ---------------------------- UI render -------------------------------- */
            function renderCategories() {
                const cats = ['all', 'fruits', 'vegetables', 'dairy', 'pulses', 'Fashion', 'Home & Kitchen', 'books', 'Sports', 'Toys', 'Mobile & Accessories', 'Electronics', 'other'];
                const box = q('categoryList'); box.innerHTML = '';
                cats.forEach(c => {
                    const div = document.createElement('div');
                    div.className = 'category' + (c === activeCat ? ' active' : '');
                    div.tabIndex = 0;
                    div.dataset.cat = c;
                    div.innerHTML = `<span style="text-transform:capitalize">${c === 'all' ? 'All' : c}</span>`;
                    div.addEventListener('click', () => { activeCat = c; renderCategories(); applyFilters(); });
                    box.appendChild(div);
                });
            }

            function renderFeatured() {
                const row = q('featuredRow'); row.innerHTML = '';
                const picks = PRODUCTS.slice(0, 8);
                picks.forEach(p => {
                    const el = document.createElement('div');
                    el.style = 'min-width:120px;background:#fff;border-radius:10px;padding:8px;box-shadow:var(--shadow);display:flex;flex-direction:column;gap:6px;align-items:center;cursor:pointer';
                    el.innerHTML = `<img src="${p.img}" style="width:100%;height:80px;object-fit:cover;border-radius:8px"><div style="font-size:13px">${p.name.split('—')[0]}</div><div style="font-weight:700;color:var(--accent)">₹${p.price}</div>`;
                    el.addEventListener('click', () => openProduct(p.id));
                    row.appendChild(el);
                });
            }

            function renderProducts() {
                const grid = q('productGrid'); grid.innerHTML = '';
                const start = (page - 1) * perPage; const end = start + perPage;
                const pageItems = filtered.slice(start, end);
                if (!pageItems.length) { grid.innerHTML = `<div class="empty" style="grid-column:1/-1">No products found</div>`; q('resultCount').textContent = 0; renderPagination(); return; }
                q('resultCount').textContent = filtered.length;
                pageItems.forEach(p => {
                    const card = document.createElement('article'); card.className = 'card';
                    card.innerHTML = `
        <img src="${p.img}" alt="${p.name}">
        <h3 title="${p.name}">${p.name}</h3>
        <div style="display:flex;justify-content:space-between;align-items:center">
          <div class="price">₹ ${p.price}</div>
          <div style="color:var(--muted);font-size:12px">In stock</div>
        </div>
        <div class="card-footer">
          <button class="btn btn-ghost viewBtn" data-id="${p.id}">View</button>
          <div style="display:flex;gap:8px">
            <button class="btn btn-ghost wishBtn" data-id="${p.id}" title="Wishlist"><i class="fa fa-heart"></i></button>
            <button class="btn btn-primary addBtn" data-id="${p.id}" title="Add to cart"><i class="fa fa-cart-plus"></i> Add</button>
          </div>
        </div>
      `;


                    // Function to add new product dynamically
                    function addProduct(newProd) {
                        // 1. SAMPLE_PRODUCTS में push करना
                        SAMPLE_PRODUCTS.push(newProd);

                        // 2. UI refresh करना (all category दिखेगी)
                        renderProducts("all");

                        // 3. Toast message दिखाना
                        toast(`${newProd.name.split("—")[0].trim()} successfully added!`);
                    }

                    grid.appendChild(card);
                });

                // attach
                $$('.viewBtn').forEach(b => b.addEventListener('click', () => openProduct(b.dataset.id)));
                $$('.addBtn').forEach(b => b.addEventListener('click', () => addToCart(b.dataset.id, 1)));
                $$('.wishBtn').forEach(b => b.addEventListener('click', () => toggleWish(b.dataset.id)));
                renderPagination();
            }

            function renderPagination() {
                const total = filtered.length; const pages = Math.max(1, Math.ceil(total / perPage));
                const box = q('pagination'); box.innerHTML = '';
                for (let i = 1; i <= pages; i++) {
                    const btn = document.createElement('button'); btn.className = 'smallbtn'; btn.textContent = i;
                    if (i === page) btn.style.fontWeight = '800';
                    btn.addEventListener('click', () => { page = i; renderProducts(); window.scrollTo({ top: 200, behavior: 'smooth' }); });
                    box.appendChild(btn);
                }
            }

            /* ---------------------------- Filters + Search -------------------------- */
            function applyFilters() {
                const qtext = ($('#search').value || '').trim().toLowerCase();
                const s = $('#sort').value;
                filtered = PRODUCTS.filter(p => {
                    const inCat = (activeCat === 'all') || (p.cat === activeCat);
                    const matches = p.name.toLowerCase().includes(qtext) || (p.desc && p.desc.toLowerCase().includes(qtext));
                    return inCat && matches;
                });
                // sort
                if (s === 'price-asc') filtered.sort((a, b) => a.price - b.price);
                else if (s === 'price-desc') filtered.sort((a, b) => b.price - a.price);
                else if (s === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name));
                // reset to page 1
                page = 1;
                renderProducts();
            }
            /* ---------------------------- Search suggestions ------------------------ */
            $('#search').addEventListener('input', () => {
                const qv = $('#search').value.trim().toLowerCase();
                const sug = qv ? PRODUCTS.filter(p => p.name.toLowerCase().includes(qv)).slice(0, 6) : [];
                const box = $('#sugBox'); box.innerHTML = '';
                if (!sug.length) { box.style.display = 'none'; return; }
                sug.forEach(s => {
                    const btn = document.createElement('button'); btn.textContent = s.name; btn.addEventListener('click', () => { $('#search').value = s.name; box.style.display = 'none'; applyFilters(); });
                    box.appendChild(btn);
                });
                box.style.display = 'block';
            });

            $('#searchBtn').addEventListener('click', () => { applyFilters(); $('#sugBox').style.display = 'none'; });
            $('#search').addEventListener('keydown', (e) => { if (e.key === 'Enter') { applyFilters(); $('#sugBox').style.display = 'none'; } });

            /* ------------------------ Cart & Wishlist logic ------------------------ */
            function updateCartBadge() {
                const cart = loadCart(); const count = Object.values(cart).reduce((s, it) => s + it.qty, 0);
                q('cartCount').textContent = count;
            }
            function updateWishBadge() {
                const w = loadWish(); const count = Object.keys(w).length;
                q('wishCount').textContent = count;
            }

            function addToCart(productId, qty = 1) {
                const prod = PRODUCTS.find(p => p.id === productId); if (!prod) return;
                const cart = loadCart();
                if (cart[productId]) cart[productId].qty += qty; else cart[productId] = { id: prod.id, name: prod.name, price: prod.price, img: prod.img, qty };
                saveCart(cart);
                toast(`"${prod.name.split('—')[0].trim()}" cart me add ho gaya`);
            }

            function removeFromCart(id) { const cart = loadCart(); delete cart[id]; saveCart(cart); renderCart(); }
            function changeQtyCart(id, delta) { const cart = loadCart(); if (!cart[id]) return; cart[id].qty = Math.max(0, cart[id].qty + delta); if (cart[id].qty === 0) delete cart[id]; saveCart(cart); renderCart(); }

            // cart UI
            $('#openCart').addEventListener('click', () => { renderCart(); q('cartModal').style.display = 'block'; });
            $('#closeCart').addEventListener('click', () => q('cartModal').style.display = 'none');

            function renderCart() {
                const box = q('cartBody'); box.innerHTML = ''; const cart = loadCart(); const keys = Object.keys(cart);
                if (!keys.length) { box.innerHTML = `<div class="empty">Cart khali hai. Add karo kuch!</div>`; q('cartFooter').innerHTML = `<div style="padding:10px">Total: ₹0</div>`; updateCartBadge(); return; }
                let total = 0;
                keys.forEach(k => {
                    const it = cart[k]; total += it.qty * it.price;
                    const div = document.createElement('div'); div.className = 'cart-item';
                    div.innerHTML = `<img src="${it.img}"><div style="flex:1"><div style="font-weight:700">${it.name}</div><div style="color:var(--muted);font-size:13px">₹ ${it.price} × ${it.qty} = ₹ ${it.price * it.qty}</div>
        <div style="margin-top:8px;display:flex;gap:8px">
          <button class="smallbtn" data-dec="${k}">-</button><div style="min-width:24px;text-align:center">${it.qty}</div><button class="smallbtn" data-inc="${k}">+</button>
          <button class="smallbtn" data-rem="${k}" style="background:#fee2e2;color:#ef4444">Remove</button>
        </div></div>`;
                    box.appendChild(div);
                });
                q('cartFooter').innerHTML = `<div style="padding:10px;display:flex;justify-content:space-between;align-items:center"><div><strong>Subtotal:</strong> ₹ ${total}</div><div style="display:flex;gap:8px"><button id="clearCart" class="btn btn-ghost">Clear</button><button id="checkout" class="btn btn-primary">Checkout</button></div></div>`;
                // listeners
                $$('#cartBody [data-inc]').forEach(b => b.addEventListener('click', () => changeQtyCart(b.dataset.inc, +1)));
                $$('#cartBody [data-dec]').forEach(b => b.addEventListener('click', () => changeQtyCart(b.dataset.dec, -1)));
                $$('#cartBody [data-rem]').forEach(b => b.addEventListener('click', () => removeFromCart(b.dataset.rem)));
                $('#clearCart')?.addEventListener('click', () => { localStorage.removeItem(CART_KEY); renderCart(); updateCartBadge(); });
                $('#checkout')?.addEventListener('click', () => { openCheckout(); });
                updateCartBadge();
            }

            // wishlist
            function toggleWish(id) {
                const w = loadWish();
                if (w[id]) { delete w[id]; toast('Wishlist se hata diya'); } else { const p = PRODUCTS.find(x => x.id === id); if (p) w[id] = p; toast('Wishlist me add ho gaya'); }
                saveWish(w); renderWish();
            }
         function updateWishBadge() {
    const w = loadWish();
    const count = Object.keys(w).length;
    q('wishCount').textContent = count;
}

function toggleWish(id) {
    const w = loadWish();
    if (w[id]) { 
        delete w[id]; 
        toast('Wishlist se hata diya'); 
    } else { 
        const p = PRODUCTS.find(x => x.id === id); 
        if (p) w[id] = p; 
        toast('Wishlist me add ho gaya'); 
    }
    saveWish(w); 
    renderWish(); 
    updateWishBadge();
}

function renderWish() {
    const body = q('wishBody');
    const w = loadWish();
    body.innerHTML = '';
    const keys = Object.keys(w);

    if (!keys.length) {
        body.innerHTML = '<div class="empty">Wishlist khali hai</div>';
        return;
    }

    keys.forEach(k => {
        const it = w[k];
        const d = document.createElement('div');
        d.style = 'display:flex;gap:8px;align-items:center;margin-bottom:8px';

        d.innerHTML = `
            <img src="${it.img}" style="width:56px;height:56px;border-radius:8px;object-fit:cover">
            <div style="flex:1">
                <div style="font-weight:700">${it.name}</div>
                <div style="color:var(--muted)">₹ ${it.price}</div>
            </div>
            <div style="display:flex;gap:6px">
                <button class="btn btn-primary" data-add="${it.id}">Add</button>
                <button class="btn btn-ghost" data-remove="${it.id}">Remove</button>
            </div>
        `;

        body.appendChild(d);
    });

    // Add to cart
    $$('#wishBody [data-add]').forEach(b => 
        b.addEventListener('click', () => { 
            addToCart(b.dataset.add, 1); 
        })
    );

    // Remove from wishlist
    $$('#wishBody [data-remove]').forEach(b => 
        b.addEventListener('click', () => { 
            const w = loadWish();
            delete w[b.dataset.remove];
            saveWish(w);
            renderWish();
            updateWishBadge();
            toast('Wishlist se hata diya');
        })
    );
}

            /* ---------------------------- Product modal ----------------------------- */
            function openProduct(id) {
                const p = PRODUCTS.find(x => x.id === id); if (!p) return;
                q('overlay').style.display = 'flex';
                q('overlay').scrollTop = 0;
                q('modalLeft').innerHTML = `<img src="${p.img}" style="width:100%;height:420px;object-fit:cover">`;
                q('modalRight').innerHTML = `<div style="display:flex;justify-content:space-between;align-items:center"><strong>${p.name}</strong><div style="color:var(--accent);font-weight:800">₹ ${p.price}</div></div>
      <p style="color:var(--muted);margin-top:8px">${p.desc || ''}</p>
      <div style="margin-top:12px;display:flex;gap:8px"><button id="modalAdd" class="btn btn-primary">Add to cart</button><button id="modalWish" class="btn btn-ghost">Wishlist</button></div>
      <div style="margin-top:12px;font-size:13px;color:var(--muted)">Category: <strong>${p.cat}</strong></div>
    `;
                $('#modalAdd').addEventListener('click', () => { addToCart(p.id, 1); });
                $('#modalWish').addEventListener('click', () => { toggleWish(p.id); });
            }
            q('overlay').addEventListener('click', (e) => { if (e.target === q('overlay')) q('overlay').style.display = 'none'; });

            /* ---------------------------- Admin add product ------------------------- */
            $('#admAdd').addEventListener('click', () => {
                const name = $('#admName').value.trim(); const price = parseFloat($('#admPrice').value); const img = $('#admImg').value.trim(); const cat = $('#admCat').value;
                if (!name || !price || !img) { alert('Name, price, image required'); return; }
                const newId = 'p' + (Date.now());
                const obj = { id: newId, name, price, cat, img, desc: name };
                PRODUCTS.unshift(obj); saveProducts(PRODUCTS); applyFilters(); renderFeatured(); $('#admName').value = ''; $('#admPrice').value = ''; $('#admImg').value = ''; toast('Product added locally');
            });

            /* ---------------------------- Checkout flow ---------------------------- */
            function openCheckout() {
                const cart = loadCart(); if (!Object.keys(cart).length) { alert('Cart khali hai'); return; }
                q('checkoutOverlay').style.display = 'flex';
                // render summary
                const sumBox = q('checkoutSummary'); sumBox.innerHTML = ''; let total = 0;
                Object.values(cart).forEach(it => { total += it.price * it.qty; const div = document.createElement('div'); div.style = 'display:flex;justify-content:space-between;margin-bottom:6px'; div.innerHTML = `<div>${it.name} × ${it.qty}</div><div>₹ ${it.price * it.qty}</div>`; sumBox.appendChild(div); });
                const tdiv = document.createElement('div'); tdiv.style = 'font-weight:800;margin-top:8px'; tdiv.textContent = 'Total: ₹ ' + total; sumBox.appendChild(tdiv);
                // fill summary in checkout form area if needed
            }
            $('#closeCheckout').addEventListener('click', () => q('checkoutOverlay').style.display = 'none');
            $('#cancelCheckout').addEventListener('click', () => q('checkoutOverlay').style.display = 'none');

            $('#checkoutForm').addEventListener('submit', (e) => {
                e.preventDefault(); // demo: just clear cart and show message
                const name = $('#cName').value.trim(); if (!name) { alert('Name required'); return; }
                // Normally: send order to backend
                alert('Order placed (demo). Thank you, ' + name + '!');
                localStorage.removeItem(CART_KEY);
                renderCart(); updateCartBadge();
                q('checkoutOverlay').style.display = 'none';
            });

            /* ---------------------------- Admin panel toggle ----------------------- */
            $('#openAdmin').addEventListener('click', () => {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                toast('Admin panel is at sidebar (local only). Use it to add products.');
            });

            /* ---------------------------- Utilities -------------------------------- */
            function toast(msg) {
                if (document.getElementById('apnaToast')) document.getElementById('apnaToast').remove();
                const t = document.createElement('div'); t.id = 'apnaToast';
                t.style = 'position:fixed;left:50%;transform:translateX(-50%);bottom:90px;background:var(--brand);color:#fff;padding:10px 14px;border-radius:999px;z-index:150;font-weight:600;box-shadow:var(--shadow)';
                t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.style.opacity = '0', 1800); setTimeout(() => t.remove(), 2200);
            }

            /* ---------------------------- Init ------------------------------------ */
            $('#perPage').addEventListener('change', () => { perPage = parseInt($('#perPage').value); page = 1; renderProducts(); });
            $('#applySort').addEventListener('click', () => { applyFilters(); });
            $('#resetFilters').addEventListener('click', () => { $('#search').value = ''; activeCat = 'all'; renderCategories(); applyFilters(); });

            // wishlist open/close handlers
                $('#closeWish').addEventListener('click', () => q('wishModal').style.display = 'none');

            // shop now scroll
            $('#shopNow').addEventListener('click', () => window.scrollTo({ top: document.querySelector('main').offsetTop - 80, behavior: 'smooth' }));

            // keyboard shortcut c -> cart
            document.addEventListener('keydown', (e) => { if (e.key.toLowerCase() === 'c') { renderCart(); q('cartModal').style.display = 'block'; } });

            // initial load
            function init() {
                PRODUCTS = loadProducts();
                renderCategories();
                renderFeatured();
                applyFilters(); // will call renderProducts
                updateCartBadge();
                updateWishBadge();
                renderWish();
                // quick populate cart/wish badge if existing
                if (Object.keys(loadCart()).length) toast('Cart me pehle se items hain');
            }
            init();
