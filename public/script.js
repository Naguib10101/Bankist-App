'use strict';

const application = document.querySelector('.application-container');

const ownerBank = document.querySelector('.owner-bank');
const SignupAccount = document.querySelector('.sign-up');
const SignupAccountBtn = document.querySelector('.sign-up-btn');
const Restore___Account = document.querySelector('.restore-account');
const sign__in__input__container = document.querySelector('.right');

const dynamicPill = document.querySelector('.pills');
const dynamicContainerImg = document.querySelector('.container-img');
const dynamicImg = document.querySelector('.container-img img');

const userNameInput = document.querySelector('.userNameInput');
const passwordInput = document.querySelector('.passwordInput');
const submitAccountBtn = document.querySelector('.submit-account');

const balanceDate = document.querySelector('.balance-date');
const balanceExchangerate = document.querySelector('.exchangerate');
const balanceValue = document.querySelector('.balance-value');

const MovementContainer = document.querySelector('.movements-container');

const transferUser = document.querySelector('.form-input-to');
const transferAmount = document.querySelector('.form-input-amount');
const transferButton = document.querySelector('.form-button');

const RequestLoanAmount = document.querySelector('.form-input-loan-amount');
const RequestLoanButton = document.querySelector('.form-request-button');

const CloseAccountLabel = document.querySelector('.form-input-close-label');
const CloseAccountPassword = document.querySelector(
  '.form-input-close-password'
);
const CloseAccountButton = document.querySelector('.form-close-button');

const SumValueIn = document.querySelector('.summary__value--in');
const SumValueOut = document.querySelector('.summary__value--out');
const SumInterest = document.querySelector('.summary__value--interest');
const SortBtn = document.querySelector('.btn--sort');

// Modal Window
const moralWindow = document.querySelector('.moral-window');
const overlayWindow = document.querySelector('.overlay-window');
const CloseBtn = document.querySelector('.close-modal');
const username_Account = document.querySelector('#username_Account_Create');
const password_Account = document.querySelector('#password_Account_Create');
const amount_Account = document.querySelector('#transactions_Create');
const regionCountry_Account = document.querySelector('#country-region');
const currency_Account = document.querySelector('#currency-account');
const Signup_Account_Button = document.querySelector('#btn--sign-up--Account');

let Sorted = false,
  currentAccount,
  failedLogin = 0,
  failedTimer = 10,
  intervalTimer_Failed,
  BalanceTotalEX;

const account1 = {
  name: 'John Doe',
  pin: 1111,
  balance: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  transactions: [],
  interest: 1.1,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2021-07-26T17:01:17.194Z',
    '2022-07-28T23:36:17.929Z',
    '2023-08-01T10:51:36.790Z',
  ],
  //American
  locale: 'en-us',
  currency: 'USD',
};

const account2 = {
  name: 'Jane Smith',
  pin: 2222,
  balance: [500, -200, 300, 100, -50, 250, 400, -150],
  transactions: [],
  interest: 1.2,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2023-07-26T12:01:20.894Z',
  ],
  //china
  locale: 'zh-cn',
  currency: 'CNY',
};

const account3 = {
  name: 'Bob Johnson',
  pin: 3333,
  balance: [800, -300, 200, 150, -100, 350, 250, -200],
  transactions: [],
  interest: 1.8,
  movementsDates: [
    '2019-06-09T22:23:37.189Z',
    '2019-07-26T14:57:10.094Z',
    '2020-06-26T14:26:48.208Z',
    '2021-05-30T02:41:45.437Z',
    '2021-12-28T02:51:07.740Z',
    '2022-04-23T18:02:55.759Z',
    '2022-07-05T02:47:05.949Z',
    '2023-12-22T04:28:05.243Z',
  ],
  // french
  locale: 'fr-fr',
  currency: 'EUR',
};

const account4 = {
  name: 'Alice Brown',
  pin: 4444,
  balance: [300, -100, 400, 200, -150, 250, 100, -50],
  transactions: [],
  interest: 1.4,
  movementsDates: [
    '2019-03-02T12:39:18.617Z',
    '2019-05-07T04:42:34.514Z',
    '2019-05-29T02:09:19.136Z',
    '2019-11-05T08:20:41.286Z',
    '2020-10-07T13:59:09.608Z',
    '2021-01-12T20:08:34.227Z',
    '2022-03-15T18:56:30.366Z',
    '2023-10-15T11:36:06.325Z',
  ],
  // German
  locale: 'de-de',
  currency: 'EUR',
};

const account5 = {
  name: 'Mike Davis',
  pin: 5555,
  balance: [600, -250, 350, 150, -200, 400, 300, -100],
  transactions: [],
  interest: 1.5,
  movementsDates: [
    '2019-03-28T02:29:21.833Z',
    '2019-05-25T09:51:54.113Z',
    '2019-09-24T17:03:23.691Z',
    '2020-07-16T20:05:12.976Z',
    '2020-09-10T00:09:27.073Z',
    '2021-09-01T01:45:27.803Z',
    '2022-01-03T02:16:44.780Z',
    '2023-01-19T22:26:45.255Z',
  ],
  //Japan
  locale: 'ja',
  currency: 'JPY',
};

const account6 = {
  name: 'Emily Taylor',
  pin: 6666,
  balance: [400, -150, 250, 100, -50, 300, 200, -150],
  transactions: [],
  interest: 2,
  movementsDates: [
    '2020-05-17T19:12:07.645Z',
    '2020-09-16T22:59:41.930Z',
    '2020-10-01T16:57:15.200Z',
    '2021-06-23T07:19:55.619Z',
    '2021-09-05T14:43:23.531Z',
    '2021-12-15T17:10:08.645Z',
    '2022-11-02T00:39:00.467Z',
    '2023-12-21T04:18:31.368Z',
  ],
  //Russian
  locale: 'ru',
  currency: 'RUB',
};

let adminAccounts = [
  account1,
  account2,
  account3,
  account4,
  account5,
  account6,
];

let deletedAccount_Admin = [];

localStorage.getItem('Deleted')
  ? (deletedAccount_Admin = JSON.parse(localStorage.getItem('Deleted')))
  : null;

localStorage.getItem('Admin')
  ? (adminAccounts = JSON.parse(localStorage.getItem('Admin')))
  : null;

const generateOwner = acc => {
  acc.forEach(
    account =>
      (account.owner = account.name
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join(''))
  );
};
generateOwner(adminAccounts);

const displayMovement = (acc, sort = false) => {
  MovementContainer.innerHTML = '';
  const movs = sort ? acc.balance.slice().sort((a, b) => a - b) : acc.balance;
  movs.forEach((account, idx) => {
    const type = account > 0 ? 'deposit' : 'withdraw';
    const date = new Date(acc.movementsDates[idx]);
    const displayDate = FormatDateMovement(date, acc.locale);
    const htmlCode = `
            <div class="movement-row">
              <div class="movement-type ${type}">${idx + 1} ${type}</div>
              <div class="movement-Date">${displayDate}</div>
              <div class="movement-balance">${FormatCurrency(
                account,
                acc.locale,
                acc.currency
              )}</div>
            </div>`;

    MovementContainer.insertAdjacentHTML('afterbegin', htmlCode);
  });
};

const displaySummary = acc => {
  const SumIn = acc.balance
    .filter(deposit => deposit > 0)
    .reduce((acc, cur) => acc + cur, false);

  SumValueIn.textContent = `${FormatCurrency(SumIn, acc.locale, acc.currency)}`;

  const SumOut = acc.balance
    .filter(withdrawal => withdrawal < 0)
    .reduce((acc, cur) => acc + cur, false);

  SumValueOut.textContent = `${FormatCurrency(
    Math.abs(SumOut),
    acc.locale,
    acc.currency
  )}`;

  const interest = acc.balance
    .filter(deposit => deposit > 0)
    .map(deposit => deposit * (acc.interest / 100))
    .reduce((acc, cur) => acc + cur, false);
  SumInterest.textContent = `${FormatCurrency(
    interest,
    acc.locale,
    acc.currency
  )}`;
};

const UpdateUI = acc => {
  displayMovement(acc);
  displaySummary(acc);
  displayBalance(acc);
};

const displayBalance = account => {
  const SumBalance = (account.TotalBalance = account.balance.reduce(
    (acc, cur) => acc + cur,
    false
  ));
  const option = {
    dateStyle: 'full',
    timeStyle: 'medium',
  };
  balanceDate.textContent = `As of ${new Intl.DateTimeFormat(
    account.locale,
    option
  ).format(new Date())}`;
  balanceValue.textContent = `${FormatCurrency(
    SumBalance,
    account.locale,
    account.currency
  )}`;
  BalanceTotalEX = SumBalance;
  ExchangerateAPi_Result(account.currency);
};

const FormatDateMovement = (date, locale) => {
  const calcMovementDate = (date1, date2) =>
    Math.floor(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const movementDate = calcMovementDate(date, new Date());
  if (movementDate === 0) return 'Today';
  if (movementDate === 1) return 'Yesterday';
  if (movementDate <= 7) return `${movementDate} day ago`;
  if (movementDate <= 30) return `${Math.floor(movementDate / 7)} week ago`;
  if (movementDate <= 365) return `${Math.floor(movementDate / 30)} month ago`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const FormatCurrency = (value, locale, cur) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: cur,
  }).format(value);
};

const fn = () => {
  let UI_Data_LocalStorage = localStorage.getItem('UI');
  UI_Data_LocalStorage
    ? ((currentAccount = JSON.parse(UI_Data_LocalStorage)),
      (application.style.opacity = '100'),
      (SignupAccount.style.display = 'none'),
      (Restore___Account.style.display = 'none'),
      (ownerBank.textContent = `Welcome back, ${
        currentAccount.name.split(' ')[0][0].toUpperCase() +
        currentAccount.name.split(' ')[0].slice(1)
      }`),
      UpdateUI(currentAccount))
    : null;
};

fn();

if (localStorage.getItem('input-state')) {
  sign__in__input__container.style.opacity = `${localStorage.getItem(
    'input-state'
  )}`;
}

submitAccountBtn.addEventListener('click', e => {
  e.preventDefault();
  if (
    userNameInput.value !== '' &&
    passwordInput.value !== '' &&
    passwordInput.value.length % 4 === 0
  ) {
    currentAccount = adminAccounts.find(
      acc => acc.owner === userNameInput.value
    );
    if (currentAccount?.pin === +passwordInput.value) {
      sign__in__input__container.style.opacity = '0';
      localStorage.setItem(
        'input-state',
        sign__in__input__container.style.opacity
      ),
        (application.style.opacity = '100');
      Restore___Account.style.display = 'none';
      ownerBank.textContent = `Welcome back, ${
        currentAccount.name.split(' ')[0][0].toUpperCase() +
        currentAccount.name.split(' ')[0].slice(1)
      }`;
      failedLogin = 0;
      UpdateUI(currentAccount);
      localStorage.setItem('UI', JSON.stringify(currentAccount));
      dynamicIsland_Success();
      SignupAccount.style.display = 'none';
      userNameInput.value = passwordInput.value = '';
      passwordInput.blur();
    } else {
      SignupAccount.style.display = 'block';
      ++failedLogin;
      application.style.opacity = '0';
      dynamicIsland_Failed();
      passwordInput.value = '';
    }
    failedLogin === 2
      ? ((intervalTimer_Failed = setInterval(() => {
          ownerBank.innerHTML = `Failed login please try again <br> 
        After 10s!!!🛑 00:${String(--failedTimer).padStart(2, 0)}`;
          if (failedTimer === 0) {
            failedTimer = 10;
            clearInterval(intervalTimer_Failed);
          }
        }, 1000)),
        userNameInput.setAttribute('disabled', ''),
        passwordInput.setAttribute('disabled', ''),
        (userNameInput.value = passwordInput.value = ''),
        setTimeout(
          () => (
            userNameInput.removeAttribute('disabled'),
            passwordInput.removeAttribute('disabled'),
            (failedLogin = 0)
          ),
          10000
        ))
      : failedLogin;
  }
});

SortBtn.addEventListener('click', e => {
  e.preventDefault();
  displayMovement(currentAccount, !Sorted);
  Sorted = !Sorted;
});

document.querySelector('.log-out--account').addEventListener('click', e => {
  e.preventDefault();
  confirm('Are you sure to log out')
    ? ((application.style.opacity = '0'),
      (ownerBank.textContent = 'login to get started 🔑'),
      (Restore___Account.style.display = 'block'),
      (SignupAccount.style.display = 'block'),
      (sign__in__input__container.style.opacity = '100'),
      localStorage.setItem(
        'input-state',
        sign__in__input__container.style.opacity
      ),
      localStorage.removeItem('UI'))
    : false;
});

Restore___Account.addEventListener('click', e => {
  e.preventDefault();
  const usrname = prompt('Enter user name');
  const pss = prompt('Enter Password');
  const found__Account = deletedAccount_Admin.find(
    acc => acc.owner === usrname && acc.pin === +pss
  );
  const found__AccountIdx = deletedAccount_Admin.findIndex(
    acc => acc.owner === usrname && acc.pin === +pss
  );
  alert(found__Account ? 'Found Welcome back again' : 'Not found try again !!');
  (async () => {
    const restored_value = await RestoreExchangerateAPi(
      'USD',
      found__Account.currency,
      10
    );
    if (
      found__Account.balance.reduce((acc, cur) => acc + cur, false) >=
      restored_value
    ) {
      adminAccounts.push(found__Account);
      found__Account.balance.push(-restored_value);
      found__Account.movementsDates.push(new Date().toISOString());
      deletedAccount_Admin.splice(found__AccountIdx, true);
      localStorage.setItem('Admin', JSON.stringify(adminAccounts));
      localStorage.setItem('Deleted', JSON.stringify(deletedAccount_Admin));
    }
  })();
});

transferButton.addEventListener('click', e => {
  e.preventDefault();
  const amount = currentAccount?.TotalBalance;
  const accountTransferTo = adminAccounts.find(
    acc => acc.owner === transferUser.value
  );
  if (
    amount >= transferAmount.value &&
    accountTransferTo?.owner !== currentAccount?.owner
  ) {
    currentAccount.balance.push(Number(-transferAmount.value));

    async function balance() {
      return await RestoreExchangerateAPi(
        currentAccount.currency,
        accountTransferTo.currency,
        +transferAmount.value
      );
    }
    balance().then(restored_value => {
      accountTransferTo.balance.push(restored_value);
      accountTransferTo.transactions.push({
        name: accountTransferTo.name,
        amount: FormatCurrency(
          restored_value,
          accountTransferTo.locale,
          accountTransferTo.currency
        ),
        date: new Date().toISOString(),
        description: `Received from ${currentAccount.name}`,
      });
      localStorage.setItem('Admin', JSON.stringify(adminAccounts));
    });
    currentAccount.movementsDates.push(new Date().toISOString());
    accountTransferTo.movementsDates.push(new Date().toISOString());

    currentAccount.transactions.push({
      name: currentAccount.name,
      amount: FormatCurrency(
        +transferAmount.value,
        currentAccount.locale,
        currentAccount.currency
      ),
      date: new Intl.DateTimeFormat(currentAccount.locale).format(new Date()),
      description: `Transfer to ${accountTransferTo.name}`,
    });

    localStorage.setItem('UI', JSON.stringify(currentAccount));
    UpdateUI(currentAccount);
  }
  transferUser.value = transferAmount.value = '';
  transferAmount.blur();
});

RequestLoanButton.addEventListener('click', e => {
  e.preventDefault();
  const amount = currentAccount?.TotalBalance;
  if (amount >= +RequestLoanAmount.value * 0.25 + +RequestLoanAmount.value) {
    currentAccount.balance.push(+RequestLoanAmount.value);
    currentAccount.movementsDates.push(new Date().toISOString());
    localStorage.setItem('UI', JSON.stringify(currentAccount));
    UpdateUI(currentAccount);
  }
  RequestLoanAmount.value = '';
});

CloseAccountButton.addEventListener('click', e => {
  e.preventDefault();
  let findIdx;
  const accountClose = adminAccounts.find(
    acc => acc.owner === CloseAccountLabel.value
  );
  findIdx = adminAccounts.findIndex(
    acc => acc.owner === CloseAccountLabel.value
  );

  if (
    accountClose.owner === currentAccount?.owner &&
    currentAccount?.pin === +CloseAccountPassword.value
  ) {
    confirm('Are you sure delete Account')
      ? (deletedAccount_Admin.push(adminAccounts[findIdx]),
        localStorage.setItem('Deleted', JSON.stringify(deletedAccount_Admin)),
        adminAccounts.splice(findIdx, 1),
        (application.style.opacity = '0'),
        (sign__in__input__container.style.opacity = '100'),
        localStorage.setItem(
          'input-state',
          sign__in__input__container.style.opacity
        ),
        (ownerBank.textContent = 'login to get started 🔑'),
        (SignupAccount.style.display = 'block'),
        (Restore___Account.style.display = 'block'),
        localStorage.setItem('Admin', JSON.stringify(adminAccounts)),
        localStorage.removeItem('UI'))
      : false;
  }
  CloseAccountLabel.value = CloseAccountPassword.value = '';
  CloseAccountPassword.blur();
});

const dynamicIsland_Success = () => {
  dynamicPill.style.animation =
    'DynamicIsland 2s cubic-bezier(0.32, 0.7, 0.22, 1.2)';
  dynamicContainerImg.style.animation =
    'faceID 2s cubic-bezier(0.32, 0.7, 0.22, 1.2)';
  dynamicImg.src = '../assets/Face-ID-Successful.gif';

  dynamicPill.addEventListener(
    'animationend',
    () => (dynamicPill.style.animation = '')
  );
  dynamicContainerImg.addEventListener(
    'animationend',
    () => (dynamicContainerImg.style.animation = '')
  );
};

const dynamicIsland_Failed = () => {
  dynamicPill.style.animation =
    'DynamicIsland 2s cubic-bezier(0.32, 0.7, 0.22, 1.2)';
  dynamicContainerImg.style.animation =
    'faceID 2s cubic-bezier(0.32, 0.7, 0.22, 1.2)';
  dynamicImg.src = '../assets/Face-ID-Unsuccessful.gif';

  dynamicPill.addEventListener(
    'animationend',
    () => (dynamicPill.style.animation = '')
  );
  dynamicContainerImg.addEventListener(
    'animationend',
    () => (dynamicContainerImg.style.animation = '')
  );
};

balanceValue.addEventListener('click', () => {
  balanceExchangerate.classList.toggle('active');
  if (!balanceExchangerate.classList.contains('active'))
    displayBalance(currentAccount);
});

let currencies = [
  {
    code: 'AED',
    symbol: 'د.إ',
    emoji: '🇦🇪',
    country: 'United Arab Emirates',
    locale: 'ar-AE',
  },
  {
    code: 'AFN',
    symbol: '؋',
    emoji: '🇦🇫',
    country: 'Afghanistan',
    locale: 'fa-AF',
  },
  {
    code: 'ALL',
    symbol: 'Lek',
    emoji: '🇦🇱',
    country: 'Albania',
    locale: 'sq-AL',
  },
  {
    code: 'AMD',
    symbol: 'դր.',
    emoji: '🇦🇲',
    country: 'Armenia',
    locale: 'hy-AM',
  },
  {
    code: 'ANG',
    symbol: 'ƒ',
    emoji: '🇳🇱',
    country: 'Netherlands Antilles',
    locale: 'nl-CW',
  },
  {
    code: 'AOA',
    symbol: 'Kz',
    emoji: '🇦🇴',
    country: 'Angola',
    locale: 'pt-AO',
  },
  {
    code: 'ARS',
    symbol: '$',
    emoji: '🇦🇷',
    country: 'Argentina',
    locale: 'es-AR',
  },
  {
    code: 'AUD',
    symbol: '$',
    emoji: '🇦🇺',
    country: 'Australia',
    locale: 'en-AU',
  },
  { code: 'AWG', symbol: 'ƒ', emoji: '🇦🇼', country: 'Aruba', locale: 'nl-AW' },
  {
    code: 'AZN',
    symbol: '₼',
    emoji: '🇦🇿',
    country: 'Azerbaijan',
    locale: 'az-AZ',
  },
  {
    code: 'BAM',
    symbol: 'KM',
    emoji: '🇧🇦',
    country: 'Bosnia and Herzegovina',
    locale: 'bs-BA',
  },
  {
    code: 'BBD',
    symbol: '$',
    emoji: '🇧🇧',
    country: 'Barbados',
    locale: 'en-BB',
  },
  {
    code: 'BDT',
    symbol: '৳',
    emoji: '🇧🇩',
    country: 'Bangladesh',
    locale: 'bn-BD',
  },
  {
    code: 'BGN',
    symbol: 'лв',
    emoji: '🇧🇬',
    country: 'Bulgaria',
    locale: 'bg-BG',
  },
  {
    code: 'BHD',
    symbol: '.د.ب',
    emoji: '🇧🇭',
    country: 'Bahrain',
    locale: 'ar-BH',
  },
  {
    code: 'BIF',
    symbol: 'Fr',
    emoji: '🇧🇮',
    country: 'Burundi',
    locale: 'rn-BI',
  },
  {
    code: 'BMD',
    symbol: '$',
    emoji: '🇧🇲',
    country: 'Bermuda',
    locale: 'en-BM',
  },
  { code: 'BND', symbol: '$', emoji: '🇧🇳', country: 'Brunei', locale: 'en-BN' },
  {
    code: 'BOB',
    symbol: 'Bs',
    emoji: '🇧🇴',
    country: 'Bolivia',
    locale: 'es-BO',
  },
  {
    code: 'BRL',
    symbol: 'R$',
    emoji: '🇧🇷',
    country: 'Brazil',
    locale: 'pt-BR',
  },
  {
    code: 'BSD',
    symbol: '$',
    emoji: '🇧🇸',
    country: 'Bahamas',
    locale: 'en-BS',
  },
  {
    code: 'BTN',
    symbol: 'Nu.',
    emoji: '🇧🇹',
    country: 'Bhutan',
    locale: 'en-BT',
  },
  {
    code: 'BWP',
    symbol: 'P',
    emoji: '🇧🇼',
    country: 'Botswana',
    locale: 'en-BW',
  },
  {
    code: 'BYN',
    symbol: 'Br',
    emoji: '🇧🇾',
    country: 'Belarus',
    locale: 'be-BY',
  },
  {
    code: 'BZD',
    symbol: 'BZ$',
    emoji: '🇧🇿',
    country: 'Belize',
    locale: 'en-BZ',
  },
  { code: 'CAD', symbol: '$', emoji: '🇨🇦', country: 'Canada', locale: 'en-CA' },
  {
    code: 'CDF',
    symbol: 'Fr',
    emoji: '🇨🇩',
    country: 'Democratic Republic of the Congo',
    locale: 'fr-CD',
  },
  {
    code: 'CHF',
    symbol: 'Fr',
    emoji: '🇨🇭',
    country: 'Switzerland',
    locale: 'fr-CH',
  },
  { code: 'CLP', symbol: '$', emoji: '🇨🇱', country: 'Chile', locale: 'es-CL' },
  { code: 'CNY', symbol: '¥', emoji: '🇨🇳', country: 'China', locale: 'zh-CN' },
  {
    code: 'COP',
    symbol: '$',
    emoji: '🇨🇴',
    country: 'Colombia',
    locale: 'es-CO',
  },
  {
    code: 'CRC',
    symbol: '₡',
    emoji: '🇨🇷',
    country: 'Costa Rica',
    locale: 'es-CR',
  },
  { code: 'CUP', symbol: '$', emoji: '🇨🇺', country: 'Cuba', locale: 'es-CU' },
  {
    code: 'CVE',
    symbol: '$',
    emoji: '🇨🇻',
    country: 'Cape Verde',
    locale: 'pt-CV',
  },
  {
    code: 'CZK',
    symbol: 'Kč',
    emoji: '🇨🇿',
    country: 'Czech Republic',
    locale: 'cs-CZ',
  },
  {
    code: 'DJF',
    symbol: 'Fr',
    emoji: '🇩🇯',
    country: 'Djibouti',
    locale: 'fr-DJ',
  },
  {
    code: 'DKK',
    symbol: 'kr',
    emoji: '🇩🇰',
    country: 'Denmark',
    locale: 'da-DK',
  },
  {
    code: 'DOP',
    symbol: '$',
    emoji: '🇩🇴',
    country: 'Dominican Republic',
    locale: 'es-DO',
  },
  {
    code: 'DZD',
    symbol: 'د.ج',
    emoji: '🇩🇿',
    country: 'Algeria',
    locale: 'ar-DZ',
  },
  { code: 'EGP', symbol: '£', emoji: '🇪🇬', country: 'Egypt', locale: 'ar-EG' },
  {
    code: 'ERN',
    symbol: 'Nkf',
    emoji: '🇪🇷',
    country: 'Eritrea',
    locale: 'en-ER',
  },
  {
    code: 'ETB',
    symbol: 'Br',
    emoji: '🇪🇹',
    country: 'Ethiopia',
    locale: 'am-ET',
  },
  {
    code: 'EUR',
    symbol: '€',
    emoji: '🇪🇺',
    country: 'Eurozone',
    locale: 'fr-FR',
  },
  { code: 'FJD', symbol: '$', emoji: '🇫🇯', country: 'Fiji', locale: 'en-FJ' },
  {
    code: 'FKP',
    symbol: '£',
    emoji: '🇫🇰',
    country: 'Falkland Islands',
    locale: 'en-FK',
  },
  {
    code: 'FOK',
    symbol: 'kr',
    emoji: '🇫🇴',
    country: 'Faroe Islands',
    locale: 'fo-FO',
  },
  {
    code: 'GBP',
    symbol: '£',
    emoji: '🇬🇧',
    country: 'United Kingdom',
    locale: 'en-GB',
  },
  {
    code: 'GEL',
    symbol: '₾',
    emoji: '🇬🇪',
    country: 'Georgia',
    locale: 'ka-GE',
  },
  {
    code: 'GGP',
    symbol: '£',
    emoji: '🇬🇬',
    country: 'Guernsey',
    locale: 'en-GG',
  },
  { code: 'GHS', symbol: '₵', emoji: '🇬🇭', country: 'Ghana', locale: 'en-GH' },
  {
    code: 'GIP',
    symbol: '£',
    emoji: '🇬🇮',
    country: 'Gibraltar',
    locale: 'en-GI',
  },
  { code: 'GMD', symbol: 'D', emoji: '🇬🇲', country: 'Gambia', locale: 'en-GM' },
  {
    code: 'GNF',
    symbol: 'Fr',
    emoji: '🇲🇱',
    country: 'Guinea',
    locale: 'fr-GN',
  },
  {
    code: 'GTQ',
    symbol: 'Q',
    emoji: '🇵🇪',
    country: 'Guatemala',
    locale: 'es-GT',
  },
  { code: 'GYD', symbol: '$', emoji: '🇬🇾', country: 'Guyana', locale: 'en-GY' },
  {
    code: 'HKD',
    symbol: '$',
    emoji: '🇭🇰',
    country: 'Hong Kong',
    locale: 'zh-HK',
  },
  {
    code: 'HNL',
    symbol: 'L',
    emoji: '🇭🇳',
    country: 'Honduras',
    locale: 'es-HN',
  },
  {
    code: 'HRK',
    symbol: 'kn',
    emoji: '🇭🇷',
    country: 'Croatia',
    locale: 'hr-HR',
  },
  { code: 'HTG', symbol: 'G', emoji: '🇭🇹', country: 'Haiti', locale: 'ht-HT' },
  {
    code: 'HUF',
    symbol: 'Ft',
    emoji: '🇭🇺',
    country: 'Hungary',
    locale: 'hu-HU',
  },
  {
    code: 'IDR',
    symbol: 'Rp',
    emoji: '🇮🇩',
    country: 'Indonesia',
    locale: 'id-ID',
  },
  { code: 'ILS', symbol: '₪', emoji: '🇮🇱', country: 'Israel', locale: 'he-IL' },
  {
    code: 'IMP',
    symbol: '£',
    emoji: '🇮🇲',
    country: 'Isle of Man',
    locale: 'en-IM',
  },
  { code: 'INR', symbol: '₹', emoji: '🇮🇳', country: 'India', locale: 'hi-IN' },
  { code: 'IQD', symbol: 'ع.د', emoji: '🇮🇶', country: 'Iraq', locale: 'ar-IQ' },
  { code: 'IRR', symbol: '﷼', emoji: '🇮🇷', country: 'Iran', locale: 'fa-IR' },
  {
    code: 'ISK',
    symbol: 'kr',
    emoji: '🇮🇸',
    country: 'Iceland',
    locale: 'is-IS',
  },
  { code: 'JEP', symbol: '£', emoji: '🇯🇪', country: 'Jersey', locale: 'en-JE' },
  {
    code: 'JMD',
    symbol: '$',
    emoji: '🇯🇲',
    country: 'Jamaica',
    locale: 'en-JM',
  },
  {
    code: 'JOD',
    symbol: 'د.ا',
    emoji: '🇯🇴',
    country: 'Jordan',
    locale: 'ar-JO',
  },
  { code: 'JPY', symbol: '¥', emoji: '🇯🇵', country: 'Japan', locale: 'ja-JP' },
  {
    code: 'KES',
    symbol: 'KSh',
    emoji: '🇰🇪',
    country: 'Kenya',
    locale: 'en-KE',
  },
  {
    code: 'KGS',
    symbol: 'с',
    emoji: '🇰🇬',
    country: 'Kyrgyzstan',
    locale: 'ky-KG',
  },
  {
    code: 'KHR',
    symbol: '៛',
    emoji: '🇰🇭',
    country: 'Cambodia',
    locale: 'km-KH',
  },
  {
    code: 'KID',
    symbol: '$',
    emoji: '🇰🇮',
    country: 'Kiribati',
    locale: 'en-KI',
  },
  {
    code: 'KMF',
    symbol: 'Fr',
    emoji: '🇰🇲',
    country: 'Comoros',
    locale: 'ar-KM',
  },
  {
    code: 'KRW',
    symbol: '₩',
    emoji: '🇰🇷',
    country: 'South Korea',
    locale: 'ko-KR',
  },
  {
    code: 'KWD',
    symbol: 'د.ك',
    emoji: '🇰🇼',
    country: 'Kuwait',
    locale: 'ar-KW',
  },
  {
    code: 'KYD',
    symbol: '$',
    emoji: '🇰🇾',
    country: 'Cayman Islands',
    locale: 'en-KY',
  },
  {
    code: 'KZT',
    symbol: '₸',
    emoji: '🇰🇿',
    country: 'Kazakhstan',
    locale: 'kk-KZ',
  },
  { code: 'LAK', symbol: '₭', emoji: '🇱🇦', country: 'Laos', locale: 'lo-LA' },
  {
    code: 'LBP',
    symbol: 'ل.ل',
    emoji: '🇱🇧',
    country: 'Lebanon',
    locale: 'ar-LB',
  },
  {
    code: 'LKR',
    symbol: 'Rs',
    emoji: '🇱🇰',
    country: 'Sri Lanka',
    locale: 'si-LK',
  },
  {
    code: 'LRD',
    symbol: '$',
    emoji: '🇱🇸',
    country: 'Liberia',
    locale: 'en-LR',
  },
  {
    code: 'LSL',
    symbol: 'L',
    emoji: '🇱🇸',
    country: 'Lesotho',
    locale: 'en-LS',
  },
  {
    code: 'MAD',
    symbol: 'د.م.',
    emoji: '🇲🇦',
    country: 'Morocco',
    locale: 'ar-MA',
  },
  {
    code: 'MDL',
    symbol: 'L',
    emoji: '🇲🇩',
    country: 'Moldova',
    locale: 'ro-MD',
  },
  {
    code: 'MGA',
    symbol: 'Ar',
    emoji: '🇲🇬',
    country: 'Madagascar',
    locale: 'mg-MG',
  },
  {
    code: 'MKD',
    symbol: 'ден',
    emoji: '🇲🇰',
    country: 'North Macedonia',
    locale: 'mk-MK',
  },
  {
    code: 'MMK',
    symbol: 'K',
    emoji: '🇲🇲',
    country: 'Myanmar',
    locale: 'my-MM',
  },
  {
    code: 'MNT',
    symbol: '₮',
    emoji: '🇲🇳',
    country: 'Mongolia',
    locale: 'mn-MN',
  },
  {
    code: 'MOP',
    symbol: 'MOP$',
    emoji: '🇲🇴',
    country: 'Macau',
    locale: 'zh-MO',
  },
  {
    code: 'MRU',
    symbol: 'UM',
    emoji: '🇲🇷',
    country: 'Mauritania',
    locale: 'ar-MR',
  },
  {
    code: 'MUR',
    symbol: '₨',
    emoji: '🇲🇺',
    country: 'Mauritius',
    locale: 'en-MU',
  },
  {
    code: 'MVR',
    symbol: 'ރ',
    emoji: '🇲🇻',
    country: 'Maldives',
    locale: 'dv-MV',
  },
  {
    code: 'MWK',
    symbol: 'MK',
    emoji: '🇲🇼',
    country: 'Malawi',
    locale: 'en-MW',
  },
  { code: 'MXN', symbol: '$', emoji: '🇲🇽', country: 'Mexico', locale: 'es-MX' },
  {
    code: 'MYR',
    symbol: 'RM',
    emoji: '🇲🇾',
    country: 'Malaysia',
    locale: 'ms-MY',
  },
  {
    code: 'MZN',
    symbol: 'MT',
    emoji: '🇲🇿',
    country: 'Mozambique',
    locale: 'pt-MZ',
  },
  {
    code: 'NAD',
    symbol: '$',
    emoji: '🇳🇦',
    country: 'Namibia',
    locale: 'en-NA',
  },
  {
    code: 'NGN',
    symbol: '₦',
    emoji: '🇳🇬',
    country: 'Nigeria',
    locale: 'en-NG',
  },
  {
    code: 'NIO',
    symbol: 'C$',
    emoji: '🇳🇮',
    country: 'Nicaragua',
    locale: 'es-NI',
  },
  {
    code: 'NOK',
    symbol: 'kr',
    emoji: '🇳🇴',
    country: 'Norway',
    locale: 'no-NO',
  },
  { code: 'NPR', symbol: 'Rs', emoji: '🇳🇵', country: 'Nepal', locale: 'ne-NP' },
  {
    code: 'NZD',
    symbol: '$',
    emoji: '🇳🇿',
    country: 'New Zealand',
    locale: 'en-NZ',
  },
  {
    code: 'OMR',
    symbol: 'ر.ع.',
    emoji: '🇴🇲',
    country: 'Oman',
    locale: 'ar-OM',
  },
  {
    code: 'PAB',
    symbol: 'B/.',
    emoji: '🇵🇦',
    country: 'Panama',
    locale: 'es-PA',
  },
  { code: 'PEN', symbol: 'S/', emoji: '🇵🇪', country: 'Peru', locale: 'es-PE' },
  {
    code: 'PGK',
    symbol: 'K',
    emoji: '🇵🇬',
    country: 'Papua New Guinea',
    locale: 'en-PG',
  },
  {
    code: 'PHP',
    symbol: '₱',
    emoji: '🇵🇭',
    country: 'Philippines',
    locale: 'en-PH',
  },
  {
    code: 'PKR',
    symbol: '₨',
    emoji: '🇵🇰',
    country: 'Pakistan',
    locale: 'ur-PK',
  },
  {
    code: 'PLN',
    symbol: 'zł',
    emoji: '🇵🇱',
    country: 'Poland',
    locale: 'pl-PL',
  },
  {
    code: 'PYG',
    symbol: '₲',
    emoji: '🇵🇾',
    country: 'Paraguay',
    locale: 'es-PY',
  },
  {
    code: 'QAR',
    symbol: 'ر.ق',
    emoji: '🇶🇦',
    country: 'Qatar',
    locale: 'ar-QA',
  },
  {
    code: 'RON',
    symbol: 'lei',
    emoji: '🇷🇴',
    country: 'Romania',
    locale: 'ro-RO',
  },
  {
    code: 'RSD',
    symbol: 'дин',
    emoji: '🇷🇸',
    country: 'Serbia',
    locale: 'sr-RS',
  },
  { code: 'RUB', symbol: '₽', emoji: '🇷🇺', country: 'Russia', locale: 'ru-RU' },
  {
    code: 'RWF',
    symbol: 'FRw',
    emoji: '🇷🇼',
    country: 'Rwanda',
    locale: 'rw-RW',
  },
  {
    code: 'SAR',
    symbol: 'ر.س',
    emoji: '🇸🇦',
    country: 'Saudi Arabia',
    locale: 'ar-SA',
  },
  {
    code: 'SBD',
    symbol: '$',
    emoji: '🇸🇧',
    country: 'Solomon Islands',
    locale: 'en-SB',
  },
  {
    code: 'SCR',
    symbol: '₨',
    emoji: '🇸🇨',
    country: 'Seychelles',
    locale: 'en-SC',
  },
  {
    code: 'SDG',
    symbol: 'ج.س.',
    emoji: '🇸🇩',
    country: 'Sudan',
    locale: 'ar-SD',
  },
  {
    code: 'SEK',
    symbol: 'kr',
    emoji: '🇸🇪',
    country: 'Sweden',
    locale: 'sv-SE',
  },
  {
    code: 'SGD',
    symbol: 'S$',
    emoji: '🇸🇬',
    country: 'Singapore',
    locale: 'en-SG',
  },
  {
    code: 'SHP',
    symbol: '£',
    emoji: '🇸🇭',
    country: 'Saint Helena',
    locale: 'en-SH',
  },
  {
    code: 'SLL',
    symbol: 'Le',
    emoji: '🇸🇱',
    country: 'Sierra Leone',
    locale: 'en-SL',
  },
  {
    code: 'SOS',
    symbol: 'S',
    emoji: '🇸🇴',
    country: 'Somalia',
    locale: 'so-SO',
  },
  {
    code: 'SRD',
    symbol: '$',
    emoji: '🇸🇷',
    country: 'Suriname',
    locale: 'nl-SR',
  },
  {
    code: 'SSP',
    symbol: '£',
    emoji: '🇸🇸',
    country: 'South Sudan',
    locale: 'en-SS',
  },
  {
    code: 'STN',
    symbol: 'Db',
    emoji: '🇱🇨',
    country: 'São Tomé and Príncipe',
    locale: 'pt-ST',
  },
  {
    code: 'SYP',
    symbol: 'ل.س',
    emoji: '🇸🇾',
    country: 'Syria',
    locale: 'ar-SY',
  },
  {
    code: 'SZL',
    symbol: 'E',
    emoji: '🇸🇿',
    country: 'Eswatini',
    locale: 'en-SZ',
  },
  {
    code: 'THB',
    symbol: '฿',
    emoji: '🇹🇭',
    country: 'Thailand',
    locale: 'th-TH',
  },
  {
    code: 'TJS',
    symbol: 'ЅМ',
    emoji: '🇹🇯',
    country: 'Tajikistan',
    locale: 'tg-TJ',
  },
  {
    code: 'TMT',
    symbol: 'T',
    emoji: '🇹🇲',
    country: 'Turkmenistan',
    locale: 'tk-TM',
  },
  {
    code: 'TND',
    symbol: 'د.ت',
    emoji: '🇹🇳',
    country: 'Tunisia',
    locale: 'ar-TN',
  },
  { code: 'TOP', symbol: 'T$', emoji: '🇹🇴', country: 'Tonga', locale: 'en-TO' },
  { code: 'TRY', symbol: '₺', emoji: '🇹🇷', country: 'Turkey', locale: 'tr-TR' },
  {
    code: 'TTD',
    symbol: 'TT$',
    emoji: '🇹🇹',
    country: 'Trinidad and Tobago',
    locale: 'en-TT',
  },
  { code: 'TVD', symbol: '$', emoji: '🇹🇻', country: 'Tuvalu', locale: 'en-TV' },
  {
    code: 'TZS',
    symbol: 'TSh',
    emoji: '🇹🇿',
    country: 'Tanzania',
    locale: 'sw-TZ',
  },
  {
    code: 'UAH',
    symbol: '₴',
    emoji: '🇺🇦',
    country: 'Ukraine',
    locale: 'uk-UA',
  },
  {
    code: 'UGX',
    symbol: 'USh',
    emoji: '🇺🇬',
    country: 'Uganda',
    locale: 'en-UG',
  },
  {
    code: 'USD',
    symbol: '$',
    emoji: '🇺🇸',
    country: 'United States',
    locale: 'en-US',
  },
  {
    code: 'UYU',
    symbol: '$',
    emoji: '🇺🇾',
    country: 'Uruguay',
    locale: 'es-UY',
  },
  {
    code: 'UZS',
    symbol: "so'm",
    emoji: '🇺🇿',
    country: 'Uzbekistan',
    locale: 'uz-UZ',
  },
  {
    code: 'VES',
    symbol: 'Bs.S.',
    emoji: '🇻🇪',
    country: 'Venezuela',
    locale: 'es-VE',
  },
  {
    code: 'VND',
    symbol: '₫',
    emoji: '🇻🇳',
    country: 'Vietnam',
    locale: 'vi-VN',
  },
  {
    code: 'VUV',
    symbol: 'Vt',
    emoji: '🇻🇺',
    country: 'Vanuatu',
    locale: 'en-VU',
  },
  {
    code: 'WST',
    symbol: 'WS$',
    emoji: '🇼🇸',
    country: 'Samoa',
    locale: 'en-WS',
  },
  {
    code: 'XAF',
    symbol: 'FCFA',
    emoji: '🇨🇫',
    country: 'Central African Republic',
    locale: 'fr-CF',
  },
  {
    code: 'XAG',
    symbol: 'XAG',
    emoji: '🇦🇨',
    country: 'Silver',
    locale: 'en-AG',
  },
  { code: 'XAU', symbol: 'XAU', emoji: '🇦🇨', country: 'Gold', locale: 'en-AG' },
  {
    code: 'XCD',
    symbol: '$',
    emoji: '🇨🇲',
    country: 'East Caribbean Dollar',
    locale: 'en-AG',
  },
  {
    code: 'XDR',
    symbol: 'XDR',
    emoji: '🇦🇨',
    country: 'Special Drawing Rights',
    locale: 'en-AG',
  },
  {
    code: 'XOF',
    symbol: 'CFA',
    emoji: '🇧🇯',
    country: 'West African CFA Franc',
    locale: 'fr-BJ',
  },
  {
    code: 'XPD',
    symbol: 'XPD',
    emoji: '🇦🇨',
    country: 'Palladium',
    locale: 'en-AG',
  },
  {
    code: 'XPT',
    symbol: 'XPT',
    emoji: '🇦🇨',
    country: 'Platinum',
    locale: 'en-AG',
  },
  {
    code: 'XRP',
    symbol: 'XRP',
    emoji: '🇦🇨',
    country: 'Ripple',
    locale: 'en-AG',
  },
  {
    code: 'YER',
    symbol: 'ر.ي',
    emoji: '🇾🇪',
    country: 'Yemen',
    locale: 'ar-YE',
  },
  {
    code: 'ZAR',
    symbol: 'R',
    emoji: '🇿🇦',
    country: 'South Africa',
    locale: 'af-ZA',
  },
  {
    code: 'ZMW',
    symbol: 'ZK',
    emoji: '🇿🇲',
    country: 'Zambia',
    locale: 'en-ZM',
  },
  {
    code: 'ZWL',
    symbol: '$',
    emoji: '🇿🇼',
    country: 'Zimbabwe',
    locale: 'en-ZW',
  },
];

async function ExchangerateAPi(data) {
  let url = `https://v6.exchangerate-api.com/v6/36d0e780b154c53170f1e38a/latest/${data}`;
  let response = await fetch(url);
  let dataExchange = await response.json();
  return dataExchange.conversion_rates;
}

async function RestoreExchangerateAPi(data, exchangerate, number_usd = 10) {
  let result = await ExchangerateAPi(data);
  const foundRestore = currencies.find(acc => acc.code === exchangerate);
  return +(result[foundRestore.code] * number_usd).toFixed(2);
}

async function ExchangerateAPi_Result(data) {
  let result = await ExchangerateAPi(data);
  currencies.forEach(currency => {
    const option = document.createElement('option');
    option.classList.add(currency.code);
    option.textContent = currency.code;
    option.value = currency.code;
    if (option.classList.contains(data)) option.setAttribute('selected', '');
    balanceExchangerate.appendChild(option);
  });
  balanceExchangerate.addEventListener('change', () => {
    const SelectedCurrency = currencies.find(
      cur => cur.code === balanceExchangerate.value
    );

    balanceValue.textContent = ` ${FormatCurrency(
      result[SelectedCurrency.code] * BalanceTotalEX,
      SelectedCurrency.locale,
      SelectedCurrency.code
    )} ${SelectedCurrency.emoji}`;
  });
}

currencies.forEach(cur => {
  regionCountry_Account.insertAdjacentHTML(
    'beforeend',
    `<option class = "${cur.country}" value = "${cur.country}"> ${cur.country} </option>`
  );
  currency_Account.insertAdjacentHTML(
    'beforeend',
    `<option class = "${cur.code}" value = "${cur.code}"> ${cur.code} </option>`
  );
});

SignupAccountBtn.addEventListener('click', e => {
  e.preventDefault();
  moralWindow.classList.remove('hidden');
  overlayWindow.classList.remove('hidden');
});

let closed_Moral_Window = () => {
  moralWindow.classList.add('hidden');
  overlayWindow.classList.add('hidden');
};

CloseBtn.addEventListener('click', closed_Moral_Window);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' || e.key === 'Esc') closed_Moral_Window();
});

Signup_Account_Button.addEventListener('click', e => {
  const username = username_Account.value;
  const password = password_Account.value;
  const amount = amount_Account.value;
  const regionCountry = regionCountry_Account.value;
  const currency = currency_Account.value;
  if (
    username != '' &&
    password != '' &&
    password.length % 4 === 0 &&
    +amount !== 0
  ) {
    e.preventDefault();
    const obj = new Object();
    const find_Obj_Account = currencies.find(
      object => object.country === regionCountry_Account.value
    );
    obj.name = username;
    obj.pin = +password;
    obj.balance = [+amount];
    obj.transactions = [];
    obj.interest = +(Math.random() * 2).toFixed(1);
    obj.movementsDates = [new Date().toISOString()];
    obj.locale = find_Obj_Account.locale;
    obj.currency = currency;
    obj.owner = obj.name
      .split(' ')
      .map(name => name[0])
      .reduce((acc, cur) => `${acc}${cur}`);
    adminAccounts.push(obj);
    localStorage.setItem('Admin', JSON.stringify(adminAccounts));
    document.querySelector('.successfully-Created').style.opacity = '100';
    username_Account.value = password_Account.value = amount_Account.value = '';
    setTimeout(() => {
      closed_Moral_Window();
    }, 2000);
  }
});
