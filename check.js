// check.js
(async function() {
    const savedName = localStorage.getItem('name');
    const savedPassword = localStorage.getItem('pw');
    
    if (!savedName || !savedPassword) {
        window.location.href = 'index.html';
        return;
    }
    
    try {
        const response = await fetch(
            `https://rbrncbmrdwpbxpoycudp.supabase.co/rest/v1/Login?name=eq.${encodeURIComponent(savedName)}&pw=eq.${encodeURIComponent(savedPassword)}`,
            {
                headers: {
                    'apikey': 'sb_publishable_uPaGYNlxQA2TzjS1DVKA9g_a4Qn7oCp',
                    'Authorization': 'Bearer sb_publishable_uPaGYNlxQA2TzjS1DVKA9g_a4Qn7oCp'
                }
            }
        );
        
        if (!response.ok) {
            window.location.href = 'index.html';
            return;
        }
        
        const Login = await response.json();
        
        if (!Login || Login.length === 0) {
            window.location.href = 'index.html';
            return;
        }
        
        if (Login[0].name !== savedName || Login[0].pw !== savedPassword) {
            window.location.href = 'index.html';
            return;
        }
        
        // Authentication successful, continue loading the page
        console.log('Authentication successful');
        
    } catch (error) {
        console.error('Error:', error);
        window.location.href = 'index.html';
    }
})();
