
const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');


document.addEventListener('DOMContentLoaded', () => {
    toggleSidebar.addEventListener('click', () => {
        sidebar.classList.toggle('active'); // Toggle sidebar visibility
        toggleSidebar.style.display = sidebar.classList.contains('active') ? 'none' : 'block'; // Hide three dots if sidebar is active
        closeSidebar.style.display = sidebar.classList.contains('active') ? 'block' : 'none'; // Show close icon if sidebar is active
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.classList.remove('active'); // Close sidebar
        toggleSidebar.style.display = 'block'; // Show three dots again
        closeSidebar.style.display = 'none'; // Hide close icon
    });
});
