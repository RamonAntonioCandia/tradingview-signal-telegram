# TradingView Signals

This project aims to deliver TradingView signals to our API server in a webhook-like fashion. The server handles these signals by recording them into MongoDB and sending them to a Telegram bot.

## Getting Started

To run the bot, follow these steps:

1. **Clone the repository**
    ```bash
    git clone https://github.com/breakoutmanagement/tradingViewSignals.git
    cd tradingViewSignals
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Set up environment variables**
    ```bash
    copy .env.example .env
    ```
    Customize the values in the `.env` file to match your configuration.

## Running the Application

### For Development
```bash
npm run dev
```

### For Production
```bash
npm start
```

## Configuration
Ensure you have the correct values in the .env file. This file includes essential configuration variables for connecting to MongoDB, setting up the Telegram bot, and handling TradingView signals.

## Contributing
Feel free to open issues or submit pull requests if you have suggestions for improvements or find any bugs.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
