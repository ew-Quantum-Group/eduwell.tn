
        // Current page tracking
        let currentPage = 'mainPage';

        // Show specific page
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.add('hidden');
            });

            // Show selected page
            document.getElementById(pageId).classList.remove('hidden');
            currentPage = pageId;

            // Update footer navigation
            updateFooterNav();

            // Manage subject buttons visibility
            if (pageId === 'subjectsPage' || pageId === 'mainPage') {
                document.getElementById('tensesNavBtn').style.display = 'none';
                document.getElementById('grammarNavBtn').style.display = 'none';
            } else {
                document.getElementById('tensesNavBtn').style.display = 'flex';
                document.getElementById('grammarNavBtn').style.display = 'flex';
            }
        }

        // Update footer navigation active state
        function updateFooterNav() {
            document.querySelectorAll('.footer-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            if (currentPage === 'mainPage') {
                document.querySelector('.footer-btn:nth-child(1)').classList.add('active');
            } else if (currentPage === 'subjectsPage') {
                document.querySelector('.footer-btn:nth-child(2)').classList.add('active');
            } else if (currentPage === 'tensesPage' || currentPage.includes('Page')) {
                document.querySelector('.footer-btn:nth-child(3)').classList.add('active');
            } else if (currentPage === 'grammarPage') {
                document.querySelector('.footer-btn:nth-child(4)').classList.add('active');
            }
        }

        // Level/course selection
        function selectLevel(subject, level) {
            alert(`Starting ${subject} Level ${level}`);
            // Load content for selected level
        }

        function selectCourse(subject, course) {
            alert(`Starting ${subject} Course ${course}`);
            // Load content for selected course
        }

        function selectSubLevel(category, sublevel) {
            alert(`Starting ${category} Sub-Level ${sublevel}`);
            // Load content for selected sub-level
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            // Main button click to show subjects
            document.getElementById('mainBtn').addEventListener('click', function() {
                showPage('subjectsPage');
            });

            // Tenses card click to show tenses levels
            document.getElementById('tensesCard').addEventListener('click', function() {
                showPage('tensesPage');
            });

            // Grammar card click to show grammar courses
            document.getElementById('grammarCard').addEventListener('click', function() {
                showPage('grammarPage');
            });
        });
