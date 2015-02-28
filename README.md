# zircon
zircon is a modern IRC client with a lot of user-friendly features. The goal is to make IRC sexy for new users: it has to be easy to use and as attractive as mainstream chat clients, like Skype for example.

## React structure (temporary)
```
- App
    - Chat
        - Servers
            - Servers
                - Channels
                    - Channel
        - Messages
            - Message
        - MessageForm
        - Users
            - User
    - Settings
```

## Build instructions
```
npm install
bower install
grunt
```