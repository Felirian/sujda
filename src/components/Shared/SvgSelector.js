const SvgSelector = ({ svg }) => {
  switch (svg) {
    case 'logo':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='337'
          height='40'
          viewBox='0 0 337 40'
          fill='none'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M16.09 19.23L0 30.15L3.43 33.14L18.79 22.9L23.46 36.72L28.58 34.14L23.18 21.2L41.24 16.36V11.97L24.03 16.53L32.74 0L27.45 0.32L19.35 16.08L7.98 7.41L4.72 10.96L16.09 19.23Z'
            fill='#A70709'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M67.1095 38.8001V28.2501H71.1795C81.6695 28.2501 85.7995 24.9601 85.7995 15.1501C85.7995 6.12007 82.2995 2.57007 71.1795 2.57007H58.0195V38.8001H67.1095ZM67.1095 21.0001V9.67007H69.9295C74.7295 9.67007 76.5095 10.9801 76.5095 15.3601C76.5095 19.7401 74.8395 21.0001 69.9295 21.0001H67.1095ZM107.26 39.3301C117.23 39.3301 123.03 35.7801 123.03 26.6401V2.57007H114V25.8501C114 28.9301 112.85 31.5401 107.27 31.5401C101.69 31.5401 100.69 29.2401 100.69 25.8501V2.57007H91.6095V26.6401C91.6095 36.5101 97.3495 39.3301 107.27 39.3301H107.26ZM130.39 38.8101H144.33C155.24 38.8101 158.27 34.8901 158.27 28.3201C158.27 23.6701 156.03 21.0601 152.01 19.9701V19.7601C155.87 18.6101 157.28 16.1601 157.28 12.4001C157.28 5.87007 154.2 2.58007 143.18 2.58007H130.39V38.8101ZM139.47 17.2001V9.79007H141.77C146.36 9.79007 148.24 10.2101 148.24 13.3901C148.24 16.5701 146.36 17.2001 141.77 17.2001H139.47ZM139.47 31.5601V23.6201H142.66C147.67 23.6201 149.08 24.6601 149.08 27.6401C149.08 30.8201 147.62 31.5601 142.66 31.5601H139.47ZM173.82 30.9901V2.59007H164.74V38.8201H187.76V30.9901H173.82ZM192.72 38.8201H201.8V2.57007H192.72V38.8201ZM226.24 39.3401C229.63 39.3401 232.87 38.7101 235.06 37.8801V30.1001C232.29 31.0901 229.53 31.4601 226.65 31.4601C220.85 31.4601 218.24 29.3701 218.24 20.7001C218.24 12.0301 220.75 9.79007 226.65 9.79007C229.63 9.79007 232.34 10.2601 234.64 11.1001V3.32007C232.5 2.54007 229.47 2.07007 225.97 2.07007C215.21 2.07007 208.38 6.72007 208.38 20.7101C208.38 35.8501 215.38 39.3501 226.24 39.3501V39.3401ZM266.44 38.8201H276.1L262.79 2.59007H250.52L237.1 38.8201H246.55L249.42 30.4701H263.62L266.44 38.8201ZM251.93 23.0501L256.26 10.4701H256.89L261.12 23.0501H251.93ZM310.61 38.8201L300.64 25.1401C305.13 23.6301 307.22 20.2901 307.22 14.3901C307.22 5.88007 302.68 2.59007 293.23 2.59007H279.76V38.8201H288.84V26.0801H291.87L299.91 38.8201H310.61ZM288.84 9.64007H291.71C296.51 9.64007 298.24 10.5301 298.24 14.3901C298.24 18.2501 296.52 19.5101 291.71 19.5101H288.84V9.64007ZM336.71 2.59007V10.5301H327.63V38.8301H318.6V10.5301H309.52V2.59007H336.72H336.71Z'
            fill='#020204'
          />
        </svg>
      );

    case 'elephantLogo':
      return (
        <svg
          width='44'
          height='53'
          viewBox='0 0 44 53'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M23.5668 10.3614C24.0046 10.289 24.4423 10.2167 24.9895 10.1262C25.1902 10.3795 25.3726 10.6147 25.5914 10.886C25.7009 10.7775 25.8286 10.7051 25.9198 10.5966C26.9412 9.29403 28.2362 8.87794 29.8596 9.18548C30.7169 9.3483 31.3735 9.72822 31.9025 10.3976C32.7598 11.5011 32.6686 12.6952 32.2673 13.9073C32.1943 14.1424 31.9754 14.3776 31.7566 14.5224C30.5892 15.3545 29.3671 16.1144 27.835 15.9877C27.7438 15.9877 27.6526 16.0058 27.5796 16.0239C27.1601 16.639 27.1601 16.639 27.4519 17.3988C27.7802 17.4169 28.1268 17.4169 28.4916 17.435C30.2791 17.5617 32.0666 17.6883 33.8359 17.8149C33.9089 17.8149 33.9636 17.833 34.0366 17.8511C35.2039 18.1768 36.3713 18.4843 37.5204 18.828C38.779 19.226 39.8186 20.022 40.8948 20.7638C41.3326 21.0713 41.7338 21.4512 42.1534 21.795C42.6458 22.193 42.9194 22.7357 43.0471 23.3327C43.1383 23.8393 43.2478 24.3458 43.2295 24.8524C43.193 26.0464 43.4484 27.1861 43.7402 28.3258C43.8679 28.8143 43.9409 29.3209 43.9774 29.8274C44.0321 30.6415 43.7038 31.2928 42.9194 31.8898C42.9924 31.6365 43.0106 31.528 43.0654 31.4375C43.8132 30.153 43.5214 28.8686 42.9194 27.6565C42.6094 27.0052 42.3722 26.4082 42.4999 25.6845C42.6094 25.0333 42.5729 24.3639 42.281 23.7307C42.1351 23.4413 41.9892 23.1518 41.4785 22.989C41.5697 23.4774 41.6244 23.8754 41.7156 24.2734C41.9345 25.2323 41.7521 26.1368 41.3143 26.9871C40.986 27.6203 40.5665 28.2354 40.2564 28.8867C40.0375 29.3389 39.8551 29.8455 39.8186 30.334C39.7457 31.3471 39.7274 32.3602 40.147 33.3552C40.4206 34.0064 40.5665 34.7301 40.6942 35.4537C40.8036 36.1231 40.7306 36.7925 40.4023 37.3895C39.8916 38.3121 39.7639 39.3252 39.618 40.3383C39.5268 40.9534 39.4356 41.5866 39.3444 42.1474C38.9978 42.5093 38.5966 42.5635 38.1953 42.5454C36.6814 42.5092 35.1674 42.6359 33.6535 42.4007C32.851 42.2741 32.0119 42.4369 31.2094 42.455C30.3156 42.4731 29.4036 42.455 28.4186 42.455C28.2727 41.2248 29.2212 40.7363 29.969 39.9765C29.8414 38.3121 30.2244 36.5573 29.7684 34.712C28.4004 34.8386 27.1783 35.0014 25.938 35.0557C24.7524 35.11 23.5486 35.0738 22.3265 35.0738C22.1988 36.6477 22.0346 38.1312 22.6001 39.5785C22.9831 40.5373 22.8372 41.5323 22.8007 42.5454C21.8522 42.8711 20.9585 42.6178 20.0647 42.5635C19.1527 42.5092 18.2407 42.5454 17.347 42.5454C16.8362 41.4781 17.5111 40.9896 18.2225 40.5916C18.3502 39.8318 18.3684 39.1443 18.0766 38.3664C17.4199 38.9634 17.2922 39.7051 17.0916 40.3745C16.891 41.0258 16.7268 41.6952 16.5626 42.3102C15.906 42.9073 15.1582 42.7263 14.4833 42.6721C13.4618 42.6178 12.4404 42.4369 11.419 42.3102C11.2548 42.2922 11.0906 42.2017 10.8353 42.1112C10.7441 40.6278 12.0026 40.1393 12.8599 39.3071C13.7719 36.9734 14.2279 34.1874 14.009 31.9622C13.2794 32.3421 12.6046 32.7943 11.9844 33.2828C11.6743 33.5361 11.3642 33.7713 11.0906 34.0426C10.4887 34.6939 9.7044 34.8386 8.86536 34.9291C7.1508 35.11 5.70984 34.5492 4.43304 33.4275C4.4148 33.4094 4.39656 33.3913 4.36008 33.3733C2.71848 32.2697 2.60904 31.1842 2.42664 29.7369C2.33544 28.9229 2.3172 28.1088 2.226 27.3127C2.18952 26.8967 2.06184 26.4986 1.98888 26.0826C1.64232 25.9559 1.36872 25.8655 1.11336 25.775C0.766798 24.5991 1.11336 23.7126 2.15304 23.0975C2.42664 22.9347 2.75496 22.8985 3.06504 22.989C3.7764 23.2242 4.08648 23.6583 4.17768 24.5086C4.2324 24.979 4.17768 25.4675 4.12296 25.9559C3.9588 27.6203 4.05 29.2304 5.1444 30.5872C5.43624 30.9491 5.83752 31.2566 6.25704 31.4737C6.786 31.7632 7.16904 31.5822 7.64328 30.9129C6.33 30.551 5.39976 29.7189 4.7796 28.561C4.57896 28.1811 4.57896 28.1268 4.70664 27.3489C5.6004 27.9821 6.43944 28.6696 7.66152 28.8324C7.62504 28.5248 7.64328 28.2897 7.58856 28.0726C7.31496 26.9871 7.02312 25.9197 6.76776 24.8343C6.27528 22.6995 6.91368 20.8723 8.31816 19.2441C8.93832 18.5386 9.75912 18.2672 10.6346 18.1406C11.7655 17.9597 12.8964 17.7426 14.0455 17.5978C14.8481 17.4893 15.6689 17.4712 16.4897 17.3988C17.201 17.3446 17.9306 17.4893 18.7332 17.2541V15.9515C18.3866 15.9335 18.0583 15.9154 17.7482 15.9154C16.0519 15.9335 14.7569 15.2279 13.9726 13.7083C13.7172 13.2017 13.4618 12.6771 13.2794 12.1524C13.0606 11.4831 13.1882 10.8318 13.6807 10.3071C14.3921 9.5654 15.3041 9.13121 16.289 8.93221C17.3287 8.73321 18.2954 9.02266 19.0615 9.7644C19.5175 10.1986 19.9188 10.7051 20.3383 11.1755C20.4478 11.3021 20.5754 11.4107 20.7943 11.6459C20.7943 11.3202 20.7943 11.1393 20.7943 10.9765C20.7761 10.5785 20.8673 10.2348 21.2503 10.0719C21.6698 9.90913 22.0894 9.94531 22.4359 10.2709C22.6366 10.4519 22.7825 10.687 23.0196 10.9584C23.2932 10.687 23.5668 10.3614 23.5668 10.3614ZM5.70984 28.6334C6.6948 29.9179 8.55528 30.4063 9.66792 29.5741C9.08424 29.4837 8.55528 29.4294 8.04456 29.3028C7.242 29.1219 6.47592 28.8686 5.70984 28.6334ZM28.6922 26.571C28.7105 25.9921 28.6922 25.5398 28.7834 24.979C28.9841 23.8031 28.8564 22.5186 28.6922 21.3608C28.5828 20.601 28.3639 19.823 28.0903 19.0994C27.762 18.1948 27.0324 17.7607 26.0474 17.7607C24.1322 17.7607 22.217 17.7607 20.3018 17.7607C20.0282 17.7607 19.7729 17.7968 19.481 17.8149C19.5175 17.9597 19.5175 18.0682 19.554 18.1225C20.1559 19.1175 20.3018 20.203 20.3018 21.3246C20.2836 22.8985 20.2836 24.4544 20.3018 26.0283C20.3018 26.2635 20.3383 26.4986 20.3748 26.77C21.0862 26.77 21.7428 26.77 22.3994 26.77C23.1838 26.77 23.9681 26.7338 24.7524 26.77C26.0474 26.8062 27.3425 26.9328 28.6922 26.571ZM30.6986 28.4525C30.7716 28.2354 30.8446 28.1268 30.8263 28.0183C30.7898 26.8424 30.6986 25.6845 30.6986 24.5086C30.6986 23.2965 30.5892 22.1025 30.3338 20.9266C30.0785 19.7869 29.7319 18.6471 28.8017 17.8149C28.4916 17.8149 28.1998 17.8149 27.8897 17.8149C28.1998 18.3577 28.601 18.8099 28.7652 19.3346C29.0023 20.1306 29.1482 20.9809 29.203 21.8131C29.3124 23.3146 29.3306 24.8162 29.3854 26.3177C29.4036 26.6434 29.3854 26.969 29.3854 27.3489C29.1118 27.3489 28.9294 27.367 28.7652 27.3489C28.1086 27.3127 27.5066 27.3851 26.8318 27.3851C26.1386 27.3851 25.3908 27.3308 24.6794 27.3489C23.3662 27.3851 22.0711 27.3851 20.7578 27.3851C20.466 27.3851 20.1742 27.3489 19.9553 27.3308C19.9553 26.5348 19.9735 25.8474 19.9553 25.1599C19.9006 23.7488 19.8641 22.3377 19.7364 20.9266C19.6452 19.8049 19.2804 18.7557 18.5873 17.8692C18.2407 17.8692 17.9124 17.8692 17.4929 17.8692C17.7118 18.231 17.8942 18.4662 18.0218 18.7195C18.2225 19.1175 18.4778 19.5155 18.569 19.9497C18.715 20.5286 18.7697 21.1437 18.7879 21.7407C18.8244 22.8262 18.7514 23.9116 18.8244 24.9971C18.8974 26.1006 19.1162 27.1861 19.2804 28.2897C23.129 28.3801 26.8865 28.561 30.6986 28.4525ZM34.9486 34.6577C34.3284 36.4849 34.4743 38.095 34.8026 39.7232C35.0945 39.1443 35.2586 38.5473 35.4958 37.9684C35.97 36.8286 35.4958 35.8517 34.9486 34.6577ZM23.8039 15.5535C23.9316 15.4812 24.0228 15.4631 24.0228 15.4088C24.2782 14.5404 24.5335 13.6902 24.8071 12.7313C23.7857 12.2429 24.6065 11.465 24.6247 10.7775C23.7492 11.0308 23.5668 11.1755 23.5486 11.7725C23.5303 12.858 23.5486 13.9434 23.5668 15.0289C23.585 15.1917 23.7127 15.3545 23.8039 15.5535ZM21.3415 12.858C21.7246 13.6721 21.9434 14.5766 22.4906 15.3545C22.6001 14.5404 22.673 13.7625 22.6548 12.9665C22.6548 12.3695 22.5271 11.7725 22.4724 11.1755C22.2353 10.9222 22.0894 10.5604 21.5604 10.5966C21.6881 11.0489 21.7793 11.4288 21.907 11.863C21.7246 12.1886 21.5604 12.4962 21.3415 12.858ZM1.78824 24.979C2.53608 24.5991 2.60904 24.3277 2.15304 23.6583C1.4052 24.2373 1.36872 24.3277 1.78824 24.979Z'
            fill='#F9AB00'
          />
          <path
            d='M23.5487 10.3426L23.1839 10.3064C22.9285 10.2883 22.7461 10.0712 22.7461 9.81793V9.29329C22.053 8.8772 21.2504 9.29329 20.4844 8.96765C21.0316 7.97264 21.9983 7.28518 22.3084 6.12735C21.0498 6.0369 20.1196 6.85099 19.0616 7.14045C18.788 6.39872 18.788 3.54033 19.0616 2.79859C19.244 2.83477 19.4629 2.83478 19.6453 2.90714C20.3384 3.12423 21.0316 3.37751 21.7247 3.5946C21.9253 3.66696 22.1624 3.64887 22.5455 3.70315C22.1807 3.05187 21.9253 2.54532 21.6335 2.07495C21.3234 1.60458 20.9039 1.20658 20.8856 0.464844L25.9564 0.681937C25.8834 0.953303 25.8834 1.1704 25.774 1.31512C25.3362 1.93022 24.8802 2.52723 24.4242 3.12423C24.2783 3.32323 24.1141 3.52224 23.8405 3.86597C25.318 3.72124 26.3394 2.76241 27.7439 2.79859C27.7074 3.61269 27.6344 4.35443 27.6344 5.07807C27.6344 5.78362 27.7074 6.50726 27.7439 7.15854C27.3608 7.42991 27.1237 7.28518 26.9231 7.10427C26.2117 6.48917 25.318 6.32635 24.3512 6.07308C24.3695 6.32635 24.333 6.56154 24.406 6.70627C24.7343 7.32136 25.0808 7.91837 25.4456 8.49728C25.5733 8.71438 25.7375 8.93147 25.9928 9.29329H23.9135C23.7858 9.72748 23.877 10.1798 23.5852 10.3968C23.6034 10.3426 23.5487 10.3426 23.5487 10.3426Z'
            fill='#F9AB00'
          />
        </svg>
      );

    case 'logo1':
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='337'
          height='40'
          viewBox='0 0 337 40'
          fill='none'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M16.09 19.23L0 30.15L3.43 33.14L18.79 22.9L23.46 36.72L28.58 34.14L23.18 21.2L41.24 16.36V11.97L24.03 16.53L32.74 0L27.45 0.32L19.35 16.08L7.98 7.41L4.72 10.96L16.09 19.23Z'
            fill='#A70709'
          />
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M67.1095 38.8001V28.2501H71.1795C81.6695 28.2501 85.7995 24.9601 85.7995 15.1501C85.7995 6.12007 82.2995 2.57007 71.1795 2.57007H58.0195V38.8001H67.1095ZM67.1095 21.0001V9.67007H69.9295C74.7295 9.67007 76.5095 10.9801 76.5095 15.3601C76.5095 19.7401 74.8395 21.0001 69.9295 21.0001H67.1095ZM107.26 39.3301C117.23 39.3301 123.03 35.7801 123.03 26.6401V2.57007H114V25.8501C114 28.9301 112.85 31.5401 107.27 31.5401C101.69 31.5401 100.69 29.2401 100.69 25.8501V2.57007H91.6095V26.6401C91.6095 36.5101 97.3495 39.3301 107.27 39.3301H107.26ZM130.39 38.8101H144.33C155.24 38.8101 158.27 34.8901 158.27 28.3201C158.27 23.6701 156.03 21.0601 152.01 19.9701V19.7601C155.87 18.6101 157.28 16.1601 157.28 12.4001C157.28 5.87007 154.2 2.58007 143.18 2.58007H130.39V38.8101ZM139.47 17.2001V9.79007H141.77C146.36 9.79007 148.24 10.2101 148.24 13.3901C148.24 16.5701 146.36 17.2001 141.77 17.2001H139.47ZM139.47 31.5601V23.6201H142.66C147.67 23.6201 149.08 24.6601 149.08 27.6401C149.08 30.8201 147.62 31.5601 142.66 31.5601H139.47ZM173.82 30.9901V2.59007H164.74V38.8201H187.76V30.9901H173.82ZM192.72 38.8201H201.8V2.57007H192.72V38.8201ZM226.24 39.3401C229.63 39.3401 232.87 38.7101 235.06 37.8801V30.1001C232.29 31.0901 229.53 31.4601 226.65 31.4601C220.85 31.4601 218.24 29.3701 218.24 20.7001C218.24 12.0301 220.75 9.79007 226.65 9.79007C229.63 9.79007 232.34 10.2601 234.64 11.1001V3.32007C232.5 2.54007 229.47 2.07007 225.97 2.07007C215.21 2.07007 208.38 6.72007 208.38 20.7101C208.38 35.8501 215.38 39.3501 226.24 39.3501V39.3401ZM266.44 38.8201H276.1L262.79 2.59007H250.52L237.1 38.8201H246.55L249.42 30.4701H263.62L266.44 38.8201ZM251.93 23.0501L256.26 10.4701H256.89L261.12 23.0501H251.93ZM310.61 38.8201L300.64 25.1401C305.13 23.6301 307.22 20.2901 307.22 14.3901C307.22 5.88007 302.68 2.59007 293.23 2.59007H279.76V38.8201H288.84V26.0801H291.87L299.91 38.8201H310.61ZM288.84 9.64007H291.71C296.51 9.64007 298.24 10.5301 298.24 14.3901C298.24 18.2501 296.52 19.5101 291.71 19.5101H288.84V9.64007ZM336.71 2.59007V10.5301H327.63V38.8301H318.6V10.5301H309.52V2.59007H336.72H336.71Z'
            fill='#020204'
          />
        </svg>
      );
    case '3d':
      return (
        <svg
          width='45'
          height='45'
          viewBox='0 0 45 45'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle cx='22.5' cy='22.5' r='22.5' fill='white' />
          <path
            d='M23 35V23.7457M23 35L13.3169 28.8073C12.671 28.3951 12.3489 28.1883 12.1744 27.8859C12 27.5834 12 27.2275 12 26.5185V16.7118M23 35L32.6847 28.8073C33.329 28.3951 33.6511 28.1883 33.8256 27.8859C34 27.5834 34 27.2275 34 26.5185V16.7118M23 23.7457L12 16.7118M23 23.7457L34 16.7118M12 16.7118L21.174 10.8455C22.054 10.2828 22.4971 10 23 10C23.5029 10 23.9444 10.2814 24.826 10.8455L34 16.7118'
            stroke='#232323'
            strokeWidth='2'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'topframe':
      return (
        <svg
          width='358'
          height='66'
          viewBox='0 0 358 66'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M303.007 28.9723L336.556 28.9723C336.556 28.9723 334.769 38.5936 341.321 45.1411C347.874 51.6886 358 50.4005 358 50.4005V66H0V50.4982C0 50.4982 10.7572 50.4631 16.6789 44.5459C22.6005 38.6287 21.4443 29.07 21.4443 29.07H22.04V28.9723H54.9195C86.0736 11.1278 130.127 0 178.963 0C227.799 0 271.853 11.1278 303.007 28.9723Z'
            fill='#333E2C'
          />
          <path
            d='M350.196 66V54.4272C350.196 54.4272 340.511 55.5279 334.245 49.9332C327.978 44.3385 329.687 36.1173 329.687 36.1173H297.956C268.969 18.2628 226.537 7 179.261 7C131.985 7 89.5525 18.2628 60.5656 36.1173H28.8829V36.1954H28.3132C28.3132 36.1954 29.4191 44.3631 23.7556 49.4192C18.0921 54.4754 7.80383 54.5053 7.80383 54.5053V66'
            stroke='#BDBC8E'
          />
        </svg>
      );

    case 'topFrameGreen':
      return (
        <svg
          width='358'
          height='66'
          viewBox='0 0 358 66'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M303.007 28.9723L336.556 28.9723C336.556 28.9723 334.769 38.5936 341.321 45.1411C347.874 51.6886 358 50.4005 358 50.4005V66H0V50.4982C0 50.4982 10.7572 50.4631 16.6789 44.5459C22.6005 38.6287 21.4443 29.07 21.4443 29.07H22.04V28.9723H54.9195C86.0736 11.1278 130.127 0 178.963 0C227.799 0 271.853 11.1278 303.007 28.9723Z'
            fill='#333E2C'
          />
          <path
            d='M350.196 66V54.4272C350.196 54.4272 340.511 55.5279 334.245 49.9332C327.978 44.3385 329.687 36.1173 329.687 36.1173H297.956C268.969 18.2628 226.537 7 179.261 7C131.985 7 89.5525 18.2628 60.5656 36.1173H28.8829V36.1954H28.3132C28.3132 36.1954 29.4191 44.3631 23.7556 49.4192C18.0921 54.4754 7.80383 54.5053 7.80383 54.5053V66'
            stroke='#BDBC8E'
          />
        </svg>
      );

    case 'topFrameRed':
      return (
        <svg
          width='358'
          height='66'
          viewBox='0 0 358 66'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M303.007 28.9723L336.556 28.9723C336.556 28.9723 334.769 38.5936 341.321 45.1411C347.874 51.6886 358 50.4005 358 50.4005V66H0V50.4982C0 50.4982 10.7572 50.4631 16.6789 44.5459C22.6005 38.6287 21.4443 29.07 21.4443 29.07H22.04V28.9723H54.9195C86.0736 11.1278 130.127 0 178.963 0C227.799 0 271.853 11.1278 303.007 28.9723Z'
            fill='#6C2929'
          />
          <path
            d='M350.196 66V54.4272C350.196 54.4272 340.511 55.5279 334.245 49.9332C327.978 44.3385 329.687 36.1173 329.687 36.1173H297.956C268.969 18.2628 226.537 7 179.261 7C131.985 7 89.5525 18.2628 60.5656 36.1173H28.8829V36.1954H28.3132C28.3132 36.1954 29.4191 44.3631 23.7556 49.4192C18.0921 54.4754 7.80383 54.5053 7.80383 54.5053V66'
            stroke='#BDBC8E'
          />
        </svg>
      );

    case 'bottomFrameGreen':
      return (
        <svg
          width='358'
          height='66'
          viewBox='0 0 358 66'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M54.9933 37.0277L21.4442 37.0277C21.4442 37.0277 23.2313 27.4064 16.6789 20.8589C10.1264 14.3114 5.40264e-06 15.5995 5.40264e-06 15.5995L7.07481e-06 -2.63655e-06L358 2.28882e-05L358 15.5019C358 15.5019 347.243 15.5369 341.321 21.4541C335.399 27.3714 336.556 36.93 336.556 36.93L335.96 36.93L335.96 37.0277L303.08 37.0277C271.926 54.8722 227.873 66 179.037 66C130.201 66 86.1473 54.8722 54.9933 37.0277Z'
            fill='#333E2C'
          />
          <path
            d='M7.80381 2.04782e-07L7.80381 11.5728C7.80381 11.5728 17.4888 10.4721 23.7555 16.0668C30.0222 21.6615 28.3131 29.8827 28.3131 29.8827L60.0444 29.8827C89.0313 47.7372 131.463 59 178.739 59C226.015 59 268.447 47.7372 297.434 29.8827L329.117 29.8827L329.117 29.8046L329.687 29.8046C329.687 29.8046 328.581 21.6369 334.244 16.5808C339.908 11.5246 350.196 11.4947 350.196 11.4947L350.196 2.46167e-05'
            stroke='#BDBC8E'
          />
        </svg>
      );

    case 'bottomFrameRed':
      return (
        <svg
          width='358'
          height='66'
          viewBox='0 0 358 66'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M54.9933 37.0277L21.4442 37.0277C21.4442 37.0277 23.2313 27.4064 16.6789 20.8589C10.1264 14.3114 5.40264e-06 15.5995 5.40264e-06 15.5995L7.07481e-06 -2.63655e-06L358 2.28882e-05L358 15.5019C358 15.5019 347.243 15.5369 341.321 21.4541C335.399 27.3714 336.556 36.93 336.556 36.93L335.96 36.93L335.96 37.0277L303.08 37.0277C271.926 54.8722 227.873 66 179.037 66C130.201 66 86.1473 54.8722 54.9933 37.0277Z'
            fill='#6C2929'
          />
          <path
            d='M7.80381 2.04782e-07L7.80381 11.5728C7.80381 11.5728 17.4888 10.4721 23.7555 16.0668C30.0222 21.6615 28.3131 29.8827 28.3131 29.8827L60.0444 29.8827C89.0313 47.7372 131.463 59 178.739 59C226.015 59 268.447 47.7372 297.434 29.8827L329.117 29.8827L329.117 29.8046L329.687 29.8046C329.687 29.8046 328.581 21.6369 334.244 16.5808C339.908 11.5246 350.196 11.4947 350.196 11.4947L350.196 2.46167e-05'
            stroke='#BDBC8E'
          />
        </svg>
      );

    case 'quiz':
      return (
        <svg
          width='58'
          height='35'
          viewBox='0 0 58 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='58' height='30' rx='3' fill='#AE4040' />
          <rect x='31' y='3' width='24' height='24' rx='2' fill='white' />
          <rect x='34' y='10' width='19' height='1' fill='#3D3D3D' />
          <rect x='34' y='15' width='19' height='1' fill='#3D3D3D' />
          <rect x='34' y='20' width='19' height='1' fill='#3D3D3D' />
          <path d='M26 0H32V35L29 31.5L26 35V0Z' fill='#F9AB00' />
          <path
            d='M7.5957 23L7.5957 21.3984L9.1289 21.1055L9.12891 10.6855L7.5957 10.3926L7.5957 8.78125L9.12891 8.78125L13.875 8.78125C15.5091 8.78125 16.7852 9.10677 17.7031 9.75781C18.6211 10.4023 19.0801 11.3724 19.0801 12.668C19.0801 13.319 18.8978 13.9017 18.5332 14.416C18.1751 14.9303 17.6673 15.3145 17.0098 15.5684C17.5762 15.6921 18.0514 15.9134 18.4355 16.2324C18.8197 16.5514 19.1094 16.9388 19.3047 17.3945C19.5065 17.8503 19.6074 18.3483 19.6074 18.8887C19.6074 20.2363 19.1615 21.2585 18.2695 21.9551C17.3841 22.6517 16.1406 23 14.5391 23L7.5957 23ZM11.7852 20.959L14.5391 20.959C15.3203 20.959 15.916 20.7832 16.3262 20.4316C16.7428 20.0801 16.9512 19.5658 16.9512 18.8887C16.9512 18.166 16.7754 17.6094 16.4238 17.2188C16.0723 16.8281 15.5221 16.6328 14.7734 16.6328L11.7852 16.6328L11.7852 20.959ZM11.7852 14.7578L14.0605 14.7578C14.8092 14.7578 15.3887 14.5918 15.7988 14.2598C16.2155 13.9277 16.4238 13.4525 16.4238 12.834C16.4238 12.1504 16.209 11.6458 15.7793 11.3203C15.3496 10.9948 14.7148 10.832 13.875 10.832L11.7852 10.832L11.7852 14.7578Z'
            fill='white'
          />
        </svg>
      );
    case 'close3d':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 41 41'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='40' height='40' rx='20' fill='#AE4040' />
          <path
            d='M11 11L29.1818 29.1818M11 29.1818L29.1818 11'
            stroke='white'
            stroke-width='1.5'
          />
        </svg>
      );
    case 'cardBg':
      return (
        <svg
          width='95'
          height='111'
          viewBox='0 0 95 111'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M80.4068 8.76274L89.3095 8.76275C89.3095 8.76275 88.8353 11.6727 90.574 13.653C92.3128 15.6333 95 15.2438 95 15.2438V96.0584C95 96.0584 92.1454 96.069 90.574 97.8587C89.0026 99.6484 89.3095 102.539 89.3095 102.539H89.1514V102.569H79.8903C71.6564 107.772 60.1819 111 47.4902 111C34.7985 111 23.324 107.772 15.0901 102.569H5.69052C5.69052 102.569 6.16473 99.659 4.42596 97.6787C2.68719 95.6984 0 96.088 0 96.088V15.2733C0 15.2733 2.85456 15.2627 4.42596 13.473C5.99735 11.6833 5.69052 8.79228 5.69052 8.79228H5.84859V8.76274L14.5736 8.76274C22.8407 3.36564 34.5309 0 47.4902 0C60.4495 0 72.1397 3.36564 80.4068 8.76274Z'
            fill='white'
          />
          <mask id='path-2-inside-1_1_315' fill='white'>
            <path d='M78.8886 10.8076L87.2973 10.8076C87.2973 10.8076 86.8444 13.2944 88.505 14.9867C90.1657 16.6791 92.7321 16.3461 92.7321 16.3461V93.8855C92.7321 93.8855 90.0058 93.8946 88.505 95.424C87.0042 96.9534 87.2973 99.4241 87.2973 99.4241H87.1463V99.4477H79.0389C71.3543 104.91 60.0449 108.362 47.4351 108.362C34.8253 108.362 23.5159 104.91 15.8313 99.4477H7.43487C7.43487 99.4477 7.88777 96.9609 6.22712 95.2686C4.56647 93.5762 2 93.9092 2 93.9092V16.3697C2 16.3697 4.72632 16.3607 6.22712 14.8313C7.72792 13.3018 7.43487 10.8312 7.43487 10.8312H7.58585V10.8076L15.9816 10.8076C23.663 5.40686 34.9072 2 47.4351 2C59.963 2 71.2073 5.40686 78.8886 10.8076Z' />
          </mask>
          <path
            d='M87.2973 10.8076L87.654 10.8726L87.7319 10.445L87.2973 10.445L87.2973 10.8076ZM78.8886 10.8076L78.6801 11.1042L78.7739 11.1702L78.8886 11.1702L78.8886 10.8076ZM88.505 14.9867L88.7638 14.7328L88.7638 14.7328L88.505 14.9867ZM92.7321 16.3461H93.0947V15.9334L92.6855 15.9865L92.7321 16.3461ZM92.7321 93.8855L92.7333 94.2482L93.0947 94.247V93.8855H92.7321ZM87.2973 99.4241V99.7867H87.7054L87.6573 99.3813L87.2973 99.4241ZM87.1463 99.4241V99.0614H86.7837V99.4241H87.1463ZM87.1463 99.4477V99.8103H87.5089V99.4477H87.1463ZM79.0389 99.4477V99.0851H78.9232L78.8288 99.1521L79.0389 99.4477ZM15.8313 99.4477L16.0414 99.1521L15.9471 99.0851H15.8313V99.4477ZM7.43487 99.4477L7.07813 99.3827L7.00025 99.8103H7.43487V99.4477ZM6.22712 95.2686L5.9683 95.5225L5.96831 95.5225L6.22712 95.2686ZM2 93.9092H1.63739V94.3219L2.04665 94.2688L2 93.9092ZM2 16.3697L1.9988 16.0071L1.63739 16.0083V16.3697H2ZM6.22712 14.8313L5.96831 14.5773L5.9683 14.5773L6.22712 14.8313ZM7.43487 10.8312V10.4686H7.0267L7.07478 10.8739L7.43487 10.8312ZM7.58585 10.8312V11.1938H7.94846V10.8312H7.58585ZM7.58585 10.8076L7.58585 10.445L7.22324 10.445V10.8076H7.58585ZM15.9816 10.8076L15.9816 11.1702L16.0963 11.1702L16.1901 11.1042L15.9816 10.8076ZM87.2973 10.445L78.8886 10.445L78.8886 11.1702L87.2973 11.1702L87.2973 10.445ZM88.7638 14.7328C88.0095 13.964 87.7276 13.0072 87.6387 12.2217C87.5944 11.8306 87.5989 11.4888 87.6143 11.2456C87.622 11.1243 87.6325 11.0283 87.6407 10.9639C87.6448 10.9317 87.6484 10.9074 87.6508 10.8919C87.652 10.8842 87.653 10.8786 87.6535 10.8754C87.6538 10.8737 87.654 10.8727 87.6541 10.8722C87.6541 10.872 87.6541 10.8719 87.6541 10.8719C87.6541 10.872 87.6541 10.872 87.6541 10.8721C87.6541 10.8722 87.6541 10.8723 87.654 10.8723C87.654 10.8724 87.654 10.8726 87.2973 10.8076C86.9405 10.7426 86.9405 10.7428 86.9405 10.7429C86.9405 10.743 86.9404 10.7431 86.9404 10.7433C86.9404 10.7435 86.9403 10.7438 86.9402 10.7442C86.9401 10.7448 86.94 10.7456 86.9398 10.7466C86.9395 10.7485 86.939 10.7511 86.9385 10.7542C86.9374 10.7604 86.936 10.7691 86.9343 10.7799C86.9309 10.8017 86.9264 10.8325 86.9214 10.8717C86.9114 10.9498 86.8994 11.0613 86.8906 11.1996C86.873 11.4756 86.868 11.8612 86.9181 12.3033C87.0178 13.1844 87.3399 14.3171 88.2462 15.2407L88.7638 14.7328ZM92.7321 16.3461C92.6855 15.9865 92.6856 15.9865 92.6857 15.9865C92.6857 15.9865 92.6858 15.9865 92.6859 15.9865C92.686 15.9865 92.686 15.9864 92.686 15.9864C92.6861 15.9864 92.686 15.9865 92.6857 15.9865C92.6851 15.9866 92.684 15.9867 92.6823 15.9869C92.6788 15.9873 92.673 15.988 92.6649 15.9888C92.6487 15.9905 92.6235 15.993 92.5901 15.9956C92.5232 16.0009 92.4239 16.0069 92.2987 16.0091C92.0478 16.0136 91.6959 16.003 91.2955 15.9425C90.4904 15.8209 89.5192 15.5026 88.7638 14.7328L88.2462 15.2407C89.1514 16.1632 90.2938 16.5246 91.1871 16.6596C91.6359 16.7274 92.0294 16.7393 92.3117 16.7342C92.453 16.7317 92.5671 16.7249 92.6472 16.7186C92.6872 16.7154 92.7187 16.7124 92.7409 16.7101C92.752 16.7089 92.7608 16.7079 92.7672 16.7071C92.7703 16.7068 92.7729 16.7064 92.7748 16.7062C92.7758 16.7061 92.7766 16.706 92.7773 16.7059C92.7776 16.7059 92.7779 16.7058 92.7781 16.7058C92.7783 16.7058 92.7784 16.7058 92.7785 16.7057C92.7786 16.7057 92.7788 16.7057 92.7321 16.3461ZM93.0947 93.8855V16.3461H92.3695V93.8855H93.0947ZM88.7638 95.678C89.4424 94.9865 90.4187 94.6225 91.2601 94.4352C91.676 94.3427 92.0476 94.2957 92.3147 94.2721C92.4481 94.2602 92.5547 94.2542 92.6272 94.2512C92.6634 94.2497 92.691 94.2489 92.709 94.2485C92.718 94.2484 92.7246 94.2483 92.7287 94.2482C92.7308 94.2482 92.7322 94.2482 92.733 94.2482C92.7333 94.2482 92.7336 94.2482 92.7336 94.2482C92.7337 94.2482 92.7337 94.2482 92.7336 94.2482C92.7336 94.2482 92.7335 94.2482 92.7335 94.2482C92.7334 94.2482 92.7333 94.2482 92.7321 93.8855C92.7309 93.5229 92.7308 93.5229 92.7307 93.5229C92.7306 93.5229 92.7305 93.5229 92.7304 93.5229C92.7302 93.5229 92.7299 93.5229 92.7296 93.5229C92.729 93.5229 92.7283 93.5229 92.7273 93.523C92.7255 93.523 92.723 93.523 92.7198 93.523C92.7135 93.5231 92.7046 93.5232 92.6933 93.5235C92.6707 93.524 92.6382 93.5249 92.5969 93.5266C92.5144 93.5301 92.3964 93.5367 92.2507 93.5497C91.9597 93.5755 91.5559 93.6264 91.1026 93.7273C90.2056 93.9269 89.0684 94.3322 88.2462 95.1701L88.7638 95.678ZM87.2973 99.4241C87.6573 99.3813 87.6574 99.3815 87.6574 99.3816C87.6574 99.3816 87.6574 99.3817 87.6574 99.3817C87.6574 99.3818 87.6574 99.3818 87.6574 99.3818C87.6574 99.3819 87.6574 99.3817 87.6574 99.3815C87.6573 99.3809 87.6572 99.3798 87.657 99.3781C87.6566 99.3747 87.656 99.369 87.6553 99.3612C87.6538 99.3454 87.6516 99.3211 87.6493 99.2889C87.6446 99.2244 87.6394 99.1287 87.6375 99.0084C87.6337 98.7673 87.6434 98.4301 87.6974 98.0483C87.8062 97.2783 88.0895 96.3652 88.7638 95.678L88.2462 95.1701C87.4197 96.0123 87.0991 97.0992 86.9793 97.9468C86.9189 98.3739 86.9081 98.7499 86.9123 99.0198C86.9145 99.1551 86.9204 99.2644 86.9259 99.341C86.9287 99.3793 86.9313 99.4095 86.9334 99.4307C86.9344 99.4413 86.9353 99.4497 86.9359 99.4558C86.9363 99.4588 86.9365 99.4612 86.9367 99.4631C86.9368 99.464 86.9369 99.4647 86.937 99.4654C86.937 99.4657 86.9371 99.4659 86.9371 99.4662C86.9371 99.4663 86.9371 99.4664 86.9371 99.4665C86.9371 99.4666 86.9372 99.4668 87.2973 99.4241ZM87.1463 99.7867H87.2973V99.0614H87.1463V99.7867ZM87.5089 99.4477V99.4241H86.7837V99.4477H87.5089ZM79.0389 99.8103H87.1463V99.0851H79.0389V99.8103ZM78.8288 99.1521C71.2168 104.563 59.9847 107.999 47.4351 107.999V108.724C60.1051 108.724 71.4918 105.257 79.249 99.7432L78.8288 99.1521ZM47.4351 107.999C34.8855 107.999 23.6534 104.563 16.0414 99.1521L15.6212 99.7432C23.3784 105.257 34.7651 108.724 47.4351 108.724V107.999ZM7.43487 99.8103H15.8313V99.0851H7.43487V99.8103ZM5.96831 95.5225C6.72264 96.2912 7.00449 97.2481 7.09343 98.0335C7.13772 98.4246 7.13327 98.7665 7.11781 99.0097C7.11009 99.131 7.09968 99.227 7.09142 99.2914C7.08729 99.3236 7.08371 99.3478 7.08129 99.3633C7.08008 99.3711 7.07916 99.3766 7.0786 99.3799C7.07833 99.3815 7.07814 99.3826 7.07806 99.3831C7.07802 99.3833 7.078 99.3834 7.07801 99.3833C7.07802 99.3833 7.07803 99.3832 7.07805 99.3831C7.07806 99.3831 7.07808 99.383 7.07808 99.383C7.0781 99.3828 7.07813 99.3827 7.43487 99.4477C7.79161 99.5127 7.79164 99.5125 7.79167 99.5124C7.79168 99.5123 7.79171 99.5121 7.79173 99.512C7.79178 99.5118 7.79183 99.5115 7.79189 99.5111C7.79201 99.5105 7.79215 99.5097 7.79232 99.5087C7.79266 99.5068 7.7931 99.5042 7.79363 99.5011C7.79469 99.4948 7.79611 99.4862 7.79781 99.4753C7.80121 99.4536 7.80574 99.4227 7.81075 99.3836C7.82078 99.3054 7.83277 99.194 7.84157 99.0557C7.85912 98.7797 7.86412 98.3941 7.81405 97.9519C7.71428 97.0709 7.39225 95.9382 6.48594 95.0146L5.96831 95.5225ZM2 93.9092C2.04665 94.2688 2.04653 94.2688 2.04642 94.2688C2.0464 94.2688 2.0463 94.2688 2.04625 94.2688C2.04616 94.2688 2.0461 94.2688 2.04609 94.2688C2.04605 94.2688 2.04617 94.2688 2.04644 94.2688C2.04698 94.2687 2.04812 94.2686 2.04986 94.2684C2.05333 94.268 2.05917 94.2673 2.06726 94.2665C2.08346 94.2647 2.10867 94.2623 2.14207 94.2597C2.2089 94.2544 2.30825 94.2484 2.43345 94.2461C2.68434 94.2417 3.03623 94.2523 3.43664 94.3128C4.24172 94.4344 5.21288 94.7527 5.9683 95.5225L6.48594 95.0146C5.58071 94.0921 4.4383 93.7307 3.54499 93.5957C3.0962 93.5279 2.70268 93.516 2.42047 93.521C2.27911 93.5236 2.16498 93.5304 2.08497 93.5367C2.04495 93.5398 2.0134 93.5429 1.99119 93.5452C1.98009 93.5464 1.97131 93.5474 1.96497 93.5482C1.9618 93.5485 1.95924 93.5488 1.95729 93.5491C1.95632 93.5492 1.95551 93.5493 1.95485 93.5494C1.95452 93.5494 1.95423 93.5495 1.95398 93.5495C1.95386 93.5495 1.9537 93.5495 1.95364 93.5495C1.95349 93.5496 1.95335 93.5496 2 93.9092ZM1.63739 16.3697V93.9092H2.36261V16.3697H1.63739ZM5.9683 14.5773C5.28972 15.2688 4.31341 15.6328 3.47199 15.8201C3.05614 15.9126 2.68454 15.9595 2.41741 15.9832C2.28407 15.9951 2.17738 16.001 2.10495 16.0041C2.06876 16.0056 2.04117 16.0063 2.02314 16.0067C2.01413 16.0069 2.00752 16.007 2.00342 16.0071C2.00137 16.0071 1.99995 16.0071 1.99917 16.0071C1.99879 16.0071 1.99856 16.0071 1.9985 16.0071C1.99846 16.0071 1.99847 16.0071 1.99852 16.0071C1.99855 16.0071 1.99862 16.0071 1.99863 16.0071C1.99871 16.0071 1.9988 16.0071 2 16.3697C2.0012 16.7323 2.00131 16.7323 2.00143 16.7323C2.00149 16.7323 2.00162 16.7323 2.00173 16.7323C2.00194 16.7323 2.0022 16.7323 2.0025 16.7323C2.0031 16.7323 2.00386 16.7323 2.00479 16.7323C2.00664 16.7323 2.00916 16.7323 2.01231 16.7322C2.01862 16.7322 2.0275 16.732 2.03882 16.7318C2.06147 16.7313 2.09392 16.7304 2.1352 16.7287C2.21774 16.7252 2.33576 16.7185 2.48147 16.7056C2.77242 16.6798 3.1762 16.6289 3.62954 16.528C4.52648 16.3284 5.66372 15.9231 6.48594 15.0852L5.9683 14.5773ZM7.43487 10.8312C7.07478 10.8739 7.07477 10.8738 7.07476 10.8737C7.07475 10.8737 7.07474 10.8736 7.07474 10.8736C7.07473 10.8735 7.07472 10.8734 7.07472 10.8734C7.07472 10.8734 7.07474 10.8735 7.07477 10.8738C7.07483 10.8744 7.07496 10.8755 7.07514 10.8772C7.07551 10.8806 7.0761 10.8863 7.07685 10.8941C7.07837 10.9098 7.08053 10.9342 7.08286 10.9664C7.0875 11.0309 7.09275 11.1266 7.09464 11.2469C7.09844 11.488 7.08872 11.8252 7.03475 12.207C6.92589 12.977 6.64265 13.8901 5.96831 14.5773L6.48594 15.0852C7.31239 14.243 7.63302 13.1561 7.75284 12.3085C7.81321 11.8814 7.82402 11.5054 7.81977 11.2354C7.81764 11.1002 7.81172 10.9909 7.8062 10.9143C7.80344 10.876 7.80078 10.8458 7.79873 10.8246C7.79771 10.8139 7.79684 10.8055 7.79619 10.7995C7.79586 10.7965 7.79559 10.7941 7.79538 10.7922C7.79528 10.7913 7.79519 10.7905 7.79512 10.7899C7.79508 10.7896 7.79505 10.7893 7.79502 10.7891C7.79501 10.789 7.79499 10.7888 7.79499 10.7888C7.79497 10.7886 7.79496 10.7885 7.43487 10.8312ZM7.58585 10.4686H7.43487V11.1938H7.58585V10.4686ZM7.22324 10.8076V10.8312H7.94846V10.8076H7.22324ZM15.9816 10.445L7.58585 10.445L7.58585 11.1702L15.9816 11.1702L15.9816 10.445ZM16.1901 11.1042C23.7994 5.75417 34.9672 2.36261 47.4351 2.36261V1.63739C34.8473 1.63739 23.5265 5.05954 15.773 10.511L16.1901 11.1042ZM47.4351 2.36261C59.903 2.36261 71.0708 5.75417 78.6801 11.1042L79.0972 10.511C71.3437 5.05955 60.0229 1.63739 47.4351 1.63739V2.36261Z'
            fill='#333E2C'
            mask='url(#path-2-inside-1_1_315)'
          />
        </svg>
      );

    default:
      return <></>;
  }
};

export default SvgSelector;
