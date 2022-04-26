export default {
    async login(context, payload) {
        console.log('start login....');

        var details = {
            'grant_type': 'authorization_code',
            'code': payload.code,
            'redirect_uri': 'http://localhost:3000/login',
            'client_id': 'vue_client',
            'client_secret': ''
        };
        
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        const response = await fetch('https://identity-server-4213.herokuapp.com/connect/token',{
            method: 'POST',
            // body: JSON.stringify({
            //     username: payload.username,
            //     password: payload.password
            // })
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        })

        const responseData = await response.json();

        console.log(responseData);

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to authen.');
            throw error;
        }

        const responseUserInfo = await fetch('https://identity-server-4213.herokuapp.com/connect/userinfo', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${responseData.access_token}`
            }
        });

        if (!responseUserInfo.ok) {
            const error = new Error(responseUserInfo.message || 'Failed to authen.');
            throw error;
        }

        const responseUserInfoData = await responseUserInfo.json();
        console.log(responseUserInfoData);

        context.commit('setToken', {
            token: responseData.access_token,
            tokenExpire: responseData.expires_in,
            name: responseUserInfoData.name
        });
    }
};