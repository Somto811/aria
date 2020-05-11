module.exports = Object.freeze({
  TOKEN: '962708157:AAHAhR2SwqlEDJsxnY-Lo899KtPoL28y9yo',
  ARIA_SECRET: '08091352372',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  INDEX_DOMAIN: 'https://one.driveindex.ga/', // Supporting Sharable Links
  GDRIVE_PARENT_DIR_ID: '1L81LG5lhQ_cTCiMSXAwK5TknDkOP1f4k',
  SUDO_USERS: [504501114],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001377775174],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['someMail@gmail.com', 'someOtherMail@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@ceejay_torrentbot"
  },
  IS_TEAM_DRIVE: false
});
