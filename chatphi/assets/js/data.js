    // Topics Data
    const topics = [
        {
            id: 'ai-design',
            title: 'الأنية والغيرية',
            icon: 'fas fa-balance-scale',
            color1: '#3B2F2F',
            color2: '#5A4A42',
            badge: 'مدخل فلسفي',
            description: 'مدخل إلى التفكير الفلسفي من خلال دراسة مفهوم الأنية وعلاقتها بالغير، وكيف يتكوّن الوعي بالذات عبر الآخر.',
            features: [
                'فهم مفهوم الأنية',
                'تحليل علاقة الذات بالغير',
                'بناء التفكير النقدي'
            ],
            stats: [
                { value: '100%', label: 'مطابق للبرنامج' },
                { value: 'درس 1', label: 'فلسفة' }
            ],
            externalLink: 'chat1.html'
            
        },
        {
            id: 'brand-strategy',
            title: 'الخصوصية والكونية',
            icon: 'fas fa-globe',
            color1: '#2E4053',
            color2: '#34495E',
            badge: 'مفهوم فلسفي',
            description: 'دراسة العلاقة بين الخصوصية والكونية، وكيف يمكن للإنسان أن يحافظ على هويته الخاصة وفي نفس الوقت ينفتح على القيم الإنسانية المشتركة.',
            features: [
                'فهم مفهوم الخصوصية',
                'تحليل معنى الكونية',
                'الموازنة بين الاختلاف والمشترك الإنساني'
            ],
            stats: [
                { value: '100%', label: 'مطابق للبرنامج' },
                { value: 'درس 2', label: 'فلسفة' }
            ],
            externalLink: 'chat2.html'
        },
        {
            id: 'visual-identity',
            title: 'النمذجة',
            icon: 'fas fa-project-diagram',
            color1: '#2C2F4A',
            color2: '#3A3F6B',
            badge: 'تفكير منهجي',
            description: 'التعرّف على مفهوم النمذجة باعتبارها أداة معرفية لفهم الواقع وتبسيطه، ودورها في بناء التفكير العلمي والفلسفي.',
            features: [
                'فهم مفهوم النمذجة',
                'تحليل دور النموذج في المعرفة',
                'التمييز بين الواقع والنموذج'
            ],
            stats: [
                { value: '100%', label: 'مطابق للبرنامج' },
                { value: 'درس 3', label: 'فلسفة' }
            ],
            externalLink: './chat3.html'
        }
    ];

    // Resources Data
    const resources = [
        {
            title: "الأنية والغيرية",
            description: "درس فلسفي يعرّف بمفهوم الأنية وعلاقتها بالغير، ودور الآخر في بناء الوعي بالذات وتشكّل الهوية.",
            icon: "fas fa-user-friends",
            pdfUrl: "https://drive.google.com/file/d/1lgQtrt8w5feiJ4pV9lhP0laKfLq5OX8j/preview",
            fileName: "الأنية-والغيرية.pdf"
        },
        {
            title: "الخصوصية والكونية",
            description: "درس فلسفي يدرس العلاقة بين الخصوصية الثقافية والكونية الإنسانية، وكيف يمكن التوفيق بين الاختلاف والمشترك.",
            icon: "fas fa-globe-africa",
            pdfUrl: "https://drive.google.com/file/d/1yMiRH-usumvip9CsYp_FLq5fJzBa_Byt/preview",
            fileName: "الخصوصية-والكونية.pdf"
        },
        {
    title: "فقرة: الخصوصية والكونية",
    description: "فقرة فلسفية تدرس العلاقة بين الخصوصية الثقافية والكونية الإنسانية، وتوضّح كيفية التوفيق بين الاختلاف بين الشعوب والقيم المشتركة التي تجمع الإنسانية في إطار من الحوار والانفتاح.",
    icon: "fas fa-globe-africa",
    pdfUrl: "https://drive.google.com/file/d/1TLK9pZ36ZhYl2BFgI3wRwOdskWZqMR--/preview",
    fileName: "الخصوصية-والكونية.pdf"
},
{
    title: "(1)تمارين باك: الخصوصية والكونية",
    description: "مجموعة تمارين بكالوريا حول درس الخصوصية والكونية تساعد على فهم الإشكاليات الفلسفية المرتبطة بالاختلاف الثقافي والقيم المشتركة، وتنمية مهارات التحليل والكتابة المنهجية استعدادًا للامتحان.",
    icon: "fas fa-globe-africa",
    pdfUrl: "https://drive.google.com/file/d/1znKznhFSEeh41qTHwqU_8wCb1bKlI0Kr/preview",
    fileName: "تمارين-باك-الخصوصية-والكونية.pdf"
},
{
    title: "(2)تمارين باك: الخصوصية والكونية",
    description: "مجموعة تمارين بكالوريا حول درس الخصوصية والكونية تساعد على فهم الإشكاليات الفلسفية المرتبطة بالاختلاف الثقافي والقيم المشتركة، وتنمية مهارات التحليل والكتابة المنهجية استعدادًا للامتحان.",
    icon: "fas fa-globe-africa",
    pdfUrl: "https://drive.google.com/file/d/1Mi1itwHIIB_6rE62zxuBTQ0j8SPxE2Xw/preview",
    fileName: "تمارين-باك-الخصوصية-والكونية.pdf"
},
{
    title: "(3)تمارين باك: الخصوصية والكونية",
    description: "مجموعة تمارين بكالوريا حول درس الخصوصية والكونية تساعد على فهم الإشكاليات الفلسفية المرتبطة بالاختلاف الثقافي والقيم المشتركة، وتنمية مهارات التحليل والكتابة المنهجية استعدادًا للامتحان.",
    icon: "fas fa-globe-africa",
    pdfUrl: "https://drive.google.com/file/d/1ktNiRLagWXGjLw3nfE5be7qsbQu6rtk8/preview",
    fileName: "تمارين-باك-الخصوصية-والكونية.pdf"
},
{
    title: "(4)تمارين باك: الخصوصية والكونية",
    description: "مجموعة تمارين بكالوريا حول درس الخصوصية والكونية تساعد على فهم الإشكاليات الفلسفية المرتبطة بالاختلاف الثقافي والقيم المشتركة، وتنمية مهارات التحليل والكتابة المنهجية استعدادًا للامتحان.",
    icon: "fas fa-globe-africa",
    pdfUrl: "https://drive.google.com/file/d/1-Cmsfw1imogld59n4ls0L7HxTeJrEncc/preview",
    fileName: "تمارين-باك-الخصوصية-والكونية.pdf"
},
{
    title: "(5)تمارين باك: الخصوصية والكونية",
    description: "مجموعة تمارين بكالوريا حول درس الخصوصية والكونية تساعد على فهم الإشكاليات الفلسفية المرتبطة بالاختلاف الثقافي والقيم المشتركة، وتنمية مهارات التحليل والكتابة المنهجية استعدادًا للامتحان.",
    icon: "fas fa-globe-africa",
    pdfUrl: "https://drive.google.com/file/d/1n5itg2okXfN73x-MQJ-z6eniFS1F1Bt_/preview",
    fileName: "تمارين-باك-الخصوصية-والكونية.pdf"
},
        {
            title: "النمذجة",
            description: "درس فلسفي يوضّح مفهوم النمذجة باعتبارها أداة معرفية لفهم الواقع وتبسيطه وبناء التفكير العلمي.",
            icon: "fas fa-project-diagram",
            pdfUrl: "https://drive.google.com/file/d/1i03yMC4njP9235OBnL3v28M2saaN31BD/preview",
            fileName: "النمذجة.pdf"
        },
        {
    title: "فقرة: النمذجة",
    description: "فقرة فلسفية توضّح مفهوم النمذجة باعتبارها أداة معرفية تُستخدم لفهم الواقع، تبسيط الظواهر، وبناء التفكير العلمي من خلال إنشاء نماذج ذهنية أو رمزية تساعد على التحليل والتفسير.",
    icon: "fas fa-project-diagram",
    pdfUrl: "https://drive.google.com/file/d/1FM5WvkoMu6SlISqnt-sPoiPWy8tOLQ01/preview",
    fileName: "النمذجة.pdf"
},
{
    title: "(1)تمارين باك: النمذجة",
    description: "مجموعة تمارين بكالوريا في درس النمذجة تهدف إلى تنمية مهارات التحليل والفهم وتطبيق المفاهيم الفلسفية من خلال منهجية منظمة تساعد على الاستعداد الجيد للامتحان.",
    icon: "fas fa-project-diagram",
    pdfUrl: "https://drive.google.com/file/d/1rdhkWsmFNUhcv7UeUR9o7_nF2-XnofGW/preview",
    fileName: "تمارين-باك-النمذجة.pdf"
},
{
    title: "(2)تمارين باك: النمذجة",
    description: "مجموعة تمارين بكالوريا في درس النمذجة تهدف إلى تنمية مهارات التحليل والفهم وتطبيق المفاهيم الفلسفية من خلال منهجية منظمة تساعد على الاستعداد الجيد للامتحان.",
    icon: "fas fa-project-diagram",
    pdfUrl: "https://drive.google.com/file/d/1IN9b7RuCbjOJtfJ3JH77Xq1LCVf-Bi_X/preview",
    fileName: "تمارين-باك-النمذجة.pdf"
},
{
    title: "(3)تمارين باك: النمذجة",
    description: "مجموعة تمارين بكالوريا في درس النمذجة تهدف إلى تنمية مهارات التحليل والفهم وتطبيق المفاهيم الفلسفية من خلال منهجية منظمة تساعد على الاستعداد الجيد للامتحان.",
    icon: "fas fa-project-diagram",
    pdfUrl: "https://drive.google.com/file/d/1a0y4ge6FH4g85UvNsABM9i65Y9xosPLy/preview",
    fileName: "تمارين-باك-النمذجة.pdf"
},
{
    title: "(4)تمارين باك: النمذجة",
    description: "مجموعة تمارين بكالوريا في درس النمذجة تهدف إلى تنمية مهارات التحليل والفهم وتطبيق المفاهيم الفلسفية من خلال منهجية منظمة تساعد على الاستعداد الجيد للامتحان.",
    icon: "fas fa-project-diagram",
    pdfUrl: "https://drive.google.com/file/d/1J22_4pdNnp7urZ_6r084PMei8CX3tTQ-/preview",
    fileName: "تمارين-باك-النمذجة.pdf"
},
{
    title: "منهجية الإجابة في فرض الفلسفة",
    description: "دليل عملي يوضّح منهجية الإجابة في فرض الفلسفة، من فهم المطلوب وتحليل السؤال، إلى بناء الإشكالية وتنظيم الحجج وصياغة خاتمة متماسكة وفق المعايير المعتمدة في البكالوريا.",
    icon: "fas fa-pen-fancy",
    pdfUrl: "https://drive.google.com/file/d/1wkw2Cq5xZ49JZkCPGH7yWoslr5oqNTSL/preview",
    fileName: "منهجية-الإجابة-في-فرض-الفلسفة.pdf"
},
    ];
