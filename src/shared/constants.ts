import {EntryUrlItem, LogLevel} from "./model/common";
import {
    description as PACKAGE_DESCRIPTION,
    homepage as PACKAGE_GITHUB_PROJECT_URL,
    license as PACKAGE_LICENSE,
    name as PACKAGE_NAME,
    version as PACKAGE_VERSION,
} from "package.json";

export const PRODUCT_NAME = "ElectronMail";

export const REPOSITORY_NAME = PRODUCT_NAME;

export const BINARY_NAME = PACKAGE_NAME;

export {
    PACKAGE_NAME,
    PACKAGE_VERSION,
    PACKAGE_LICENSE,
    PACKAGE_DESCRIPTION,
    PACKAGE_GITHUB_PROJECT_URL,
};

export const ONE_SECOND_MS = 1000;

export const ONE_MINUTE_MS = ONE_SECOND_MS * 60;

export const DEFAULT_API_CALL_TIMEOUT = ONE_SECOND_MS * 25;

export const DEFAULT_TRAY_ICON_COLOR = "#1ca48c"; // src/assets/icon/icon.png dominant color

export const DEFAULT_UNREAD_BADGE_BG_COLOR = "#de4251";

export const DEFAULT_UNREAD_BADGE_BG_TEXT = "#ffffff";

export const DEFAULT_MESSAGES_STORE_PORTION_SIZE = 500;

export const APP_EXEC_PATH_RELATIVE_HUNSPELL_DIR = "./usr/share/hunspell";

export const UPDATE_CHECK_FETCH_TIMEOUT = ONE_SECOND_MS * 10;

export const WEB_CHUNK_NAMES = {
    "about": "about",
    "browser-window": "browser-window",
    "search-in-page-browser-view": "search-in-page-browser-view",
} as const;

export const PROVIDER_REPO_NAMES = [
    "proton-mail",
    "proton-account",
    "proton-mail-settings",
    "proton-contacts",
    "proton-calendar",
] as const;

export const PROVIDER_REPO_MAP = {
    [PROVIDER_REPO_NAMES[0]]: {
        repoRelativeDistDir: "./dist",
        baseDirName: "",
        repo: "https://github.com/ProtonMail/proton-mail.git",
        commit: "e039060ede1890cee21e61b128d32a214472d7e9",
        protonPack: {
            appConfig: {clientId: "WebMail"},
            webpackIndexEntryItems: [
                // immediate
                "./node_modules/proton-shared/lib/api/contacts.ts",
                "./node_modules/proton-shared/lib/api/conversations.js",
                "./node_modules/proton-shared/lib/api/events.ts",
                "./node_modules/proton-shared/lib/api/labels.ts",
                "./node_modules/proton-shared/lib/api/messages.js",
                "./node_modules/proton-shared/lib/constants.ts",
                "./node_modules/proton-shared/lib/models/mailSettingsModel.js",
                "./node_modules/react-components/containers/app/StandardSetup.tsx",
                "./src/app/containers/PageContainer.tsx",
                "./src/app/helpers/attachment/attachmentLoader.ts",
                "./src/app/helpers/mailboxUrl.ts",
                "./src/app/helpers/message/messageDecrypt.ts",
                // lazy/dynamic
                "./node_modules/react-components/hooks/useApi.ts",
                "./node_modules/react-components/hooks/useAuthentication.ts",
                "./node_modules/react-components/hooks/useCache.ts",
                "./node_modules/react-components/hooks/useGetEncryptionPreferences.ts",
                "./node_modules/react-router/esm/react-router.js",
                "./src/app/containers/AttachmentProvider.tsx",
                "./src/app/hooks/message/useMessageKeys.ts",
            ],
        },
    },
    [PROVIDER_REPO_NAMES[1]]: {
        repoRelativeDistDir: "./dist",
        baseDirName: "account",
        repo: "https://github.com/ProtonMail/proton-account.git",
        commit: "9f1a16e7d41f1b58d8a02c8ab3faf7cd8bf9919a",
        protonPack: {appConfig: {clientId: "WebAccount"}}
    },
    [PROVIDER_REPO_NAMES[2]]: {
        repoRelativeDistDir: "./dist",
        baseDirName: "settings",
        repo: "https://github.com/ProtonMail/proton-mail-settings.git",
        commit: "8609984010d088fb65ece554a475499b82df99f1",
        protonPack: {appConfig: {clientId: "WebMailSettings"}},
    },
    [PROVIDER_REPO_NAMES[3]]: {
        repoRelativeDistDir: "./dist",
        baseDirName: "contacts",
        repo: "https://github.com/ProtonMail/proton-contacts.git",
        commit: "bdce4276478f966d3817e70468ba08080375225a",
        protonPack: {appConfig: {clientId: "WebContacts"}},
    },
    [PROVIDER_REPO_NAMES[4]]: {
        repoRelativeDistDir: "./dist",
        baseDirName: "calendar",
        repo: "https://github.com/ProtonMail/proton-calendar.git",
        commit: "78930119df898e600a3144262dad1cbc94b70cd1",
        protonPack: {appConfig: {clientId: "WebCalendar"}},
    },
} as const;

export const LOCAL_WEBCLIENT_PROTOCOL_PREFIX = "webclient";

export const LOCAL_WEBCLIENT_PROTOCOL_RE_PATTERN = `${LOCAL_WEBCLIENT_PROTOCOL_PREFIX}[\\d]+`;

export const PROTON_API_ENTRY_VALUE_PREFIX = "local:::";

export const PROTON_API_ENTRY_PRIMARY_VALUE = "https://mail.protonmail.com";

function getBuiltInWebClientTitle(): string {
    return PROVIDER_REPO_MAP["proton-mail"].commit.substr(0, 7);
}

export const PROTON_API_ENTRY_RECORDS: DeepReadonly<EntryUrlItem[]> = [
    {
        value: PROTON_API_ENTRY_PRIMARY_VALUE,
        title: `${PROTON_API_ENTRY_PRIMARY_VALUE} (${getBuiltInWebClientTitle()})`,
    },
    {
        value: "https://app.protonmail.ch",
        title: `https://app.protonmail.ch (${getBuiltInWebClientTitle()})`,
    },
    {
        value: "https://protonirockerxow.onion",
        title: `https://protonirockerxow.onion (${getBuiltInWebClientTitle()})`,
    },
];

export const PROTON_API_ENTRY_URLS = PROTON_API_ENTRY_RECORDS.map(({value: url}) => url);

export const WEB_CLIENTS_BLANK_HTML_FILE_NAME = "blank.html";

export const LOG_LEVELS: Readonly<LogLevel[]> = Object.keys(
    ((stub: Record<LogLevel, null>) => stub)({ // eslint-disable-line @typescript-eslint/explicit-module-boundary-types
        error: null,
        warn: null,
        info: null,
        verbose: null,
        debug: null,
        silly: null,
    }),
) as Readonly<LogLevel[]>;

export const ZOOM_FACTOR_DEFAULT = 1;

export const ZOOM_FACTORS: ReadonlyArray<number> = [
    0.5,
    0.55,
    0.6,
    0.65,
    0.7,
    0.75,
    0.8,
    0.85,
    0.9,
    0.95,
    ZOOM_FACTOR_DEFAULT,
    1.05,
    1.1,
    1.15,
    1.2,
    1.25,
    1.3,
    1.35,
    1.4,
    1.45,
    1.5,
    1.6,
    1.7,
    1.8,
    1.9,
    2,
];

export const LAYOUT_MODES = [
    {value: "top", title: "top"},
    {value: "left", title: "left"},
    {value: "left-thin", title: "left (thin)"},
] as const;

export const WEB_VIEW_SESSION_STORAGE_KEY_SKIP_LOGIN_DELAYS = "ELECTRON_MAIL_SKIP_LOGIN_DELAYS";

// TODO electron: get rid of "baseURLForDataURL" workaround, see https://github.com/electron/electron/issues/20700
export const WEB_PROTOCOL_SCHEME = "web";

export const ACCOUNT_EXTERNAL_CONTENT_PROXY_URL_REPLACE_PATTERN = "$URL";

// user data dir, defaults to app.getPath("userData")
export const RUNTIME_ENV_USER_DATA_DIR = "ELECTRON_MAIL_USER_DATA_DIR";

// ci-specific
export const RUNTIME_ENV_CI_PROTON_CLIENTS_ONLY = "ELECTRON_MAIL_CI_PROTON_CLIENTS_ONLY";
export const RUNTIME_ENV_CI_REMOVE_OUTPUT_GIT_DIR = "ELECTRON_MAIL_CI_REMOVE_OUTPUT_GIT_DIR";

// protonmail account to login during e2e tests running
export const RUNTIME_ENV_E2E_PROTONMAIL_LOGIN = "ELECTRON_MAIL_E2E_PROTONMAIL_LOGIN";
export const RUNTIME_ENV_E2E_PROTONMAIL_PASSWORD = "ELECTRON_MAIL_E2E_PROTONMAIL_PASSWORD";
export const RUNTIME_ENV_E2E_PROTONMAIL_2FA_CODE = "ELECTRON_MAIL_E2E_PROTONMAIL_2FA_CODE";
export const RUNTIME_ENV_E2E_PROTONMAIL_UNREAD_MIN = "ELECTRON_MAIL_E2E_PROTONMAIL_UNREAD_MIN";
