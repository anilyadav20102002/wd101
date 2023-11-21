<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GitHub API Example</title>
</head>
<body>

    <h1>GitHub User Information</h1>

    <button onclick="getUserData('your-username')">Get User Data</button>

    <div id="userData"></div>

    <script>
        async function getUserData(username) {
            const apiUrl = `https://api.github.com/users/${username}`;

            try {
                const response = await fetch(apiUrl);
                const userData = await response.json();

                // Display user data
                document.getElementById('userData').innerHTML = `
                    <p><strong>Name:</strong> ${userData.name}</p>
                    <p><strong>Location:</strong> ${userData.location}</p>
                    <p><strong>Public Repositories:</strong> ${userData.public_repos}</p>
                    <p><strong>Followers:</strong> ${userData.followers}</p>
                    <p><strong>Following:</strong> ${userData.following}</p>
                `;
            } catch (error) {
                console.error('Error fetching user data:', error);
                document.getElementById('userData').innerHTML = '<p>Error fetching user data</p>';
            }
        }
    </script>

</body>
</html>
