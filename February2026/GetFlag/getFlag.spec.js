const getFlag = require('./getFlag');

describe('Return the correct country flag when given the country code', () => {
    test('1. getFlag("AL") should return "🇦🇱".', () => {
        expect(getFlag("AL")).toEqual('🇦🇱');
    });
    test('2. getFlag("AD") should return "🇦🇩".', () => {
        expect(getFlag("AD")).toEqual('🇦🇩');
    });
    test('3. getFlag("AR") should return "🇦🇷".', () => {
        expect(getFlag("AR")).toEqual('🇦🇷');
    });
    test('4. getFlag("AM") should return "🇦🇲".', () => {
        expect(getFlag("AM")).toEqual('🇦🇲');
    });
    test('5. getFlag("AU") should return "🇦🇺".', () => {
        expect(getFlag("AU")).toEqual('🇦🇺');
    });
    test('6. getFlag("AT") should return "🇦🇹".', () => {
        expect(getFlag("AT")).toEqual('🇦🇹');
    });
    test('7. getFlag("AZ") should return "🇦🇿".', () => {
        expect(getFlag("AZ")).toEqual('🇦🇿');
    });
    test('8. getFlag("BE") should return "🇧🇪".', () => {
        expect(getFlag("BE")).toEqual('🇧🇪');
    });
    test('9. getFlag("BJ") should return "🇧🇯".', () => {
        expect(getFlag("BJ")).toEqual('🇧🇯');
    });
    test('10. getFlag("BO") should return "🇧🇴".', () => {
        expect(getFlag("BO")).toEqual('🇧🇴');
    });
    test('11. getFlag("BA") should return "🇧🇦".', () => {
        expect(getFlag("BA")).toEqual('🇧🇦');
    });
    test('12. getFlag("BR") should return "🇧🇷".', () => {
        expect(getFlag("BR")).toEqual('🇧🇷');
    });
    test('13. getFlag("BG") should return "🇧🇬".', () => {
        expect(getFlag("BG")).toEqual('🇧🇬');
    });
    test('14. getFlag("CA") should return "🇨🇦".', () => {
        expect(getFlag("CA")).toEqual('🇨🇦');
    });
    test('15. getFlag("CL") should return "🇨🇱".', () => {
        expect(getFlag("CL")).toEqual('🇨🇱');
    });
    test('16. getFlag("CN") should return "🇨🇳".', () => {
        expect(getFlag("CN")).toEqual('🇨🇳');
    });
    test('17. getFlag("CO") should return "🇨🇴".', () => {
        expect(getFlag("CO")).toEqual('🇨🇴');
    });
    test('18. getFlag("HR") should return "🇭🇷".', () => {
        expect(getFlag("HR")).toEqual('🇭🇷');
    });
    test('19. getFlag("CY") should return "🇨🇾".', () => {
        expect(getFlag("CY")).toEqual('🇨🇾');
    });
    test('20. getFlag("CZ") should return "🇨🇿".', () => {
        expect(getFlag("CZ")).toEqual('🇨🇿');
    });
    test('21. getFlag("DK") should return "🇩🇰".', () => {
        expect(getFlag("DK")).toEqual('🇩🇰');
    });
    test('22. getFlag("EC") should return "🇪🇨".', () => {
        expect(getFlag("EC")).toEqual('🇪🇨');
    });
    test('23. getFlag("ER") should return "🇪🇷".', () => {
        expect(getFlag("ER")).toEqual('🇪🇷');
    });
    test('24. getFlag("EE") should return "🇪🇪".', () => {
        expect(getFlag("EE")).toEqual('🇪🇪');
    });
    test('25. getFlag("FI") should return "🇫🇮".', () => {
        expect(getFlag("FI")).toEqual('🇫🇮');
    });
    test('26. getFlag("FR") should return "🇫🇷".', () => {
        expect(getFlag("FR")).toEqual('🇫🇷');
    });
    test('28. getFlag("DE") should return "🇩🇪".', () => {
        expect(getFlag("DE")).toEqual('🇩🇪');
    });
    test('29. getFlag("GB") should return "🇬🇧".', () => {
        expect(getFlag("GB")).toEqual('🇬🇧');
    });
    test('30. getFlag("GR") should return "🇬🇷".', () => {
        expect(getFlag("GR")).toEqual('🇬🇷');
    });
    test('31. getFlag("GW") should return "🇬🇼".', () => {
        expect(getFlag("GW")).toEqual('🇬🇼');
    });
    test('32. getFlag("HT") should return "🇭🇹".', () => {
        expect(getFlag("HT")).toEqual('🇭🇹');
    });
    test('33. getFlag("HK") should return "🇭🇰".', () => {
        expect(getFlag("HK")).toEqual('🇭🇰');
    });
    test('34. getFlag("HU") should return "🇭🇺".', () => {
        expect(getFlag("HU")).toEqual('🇭🇺');
    });
    test('35. getFlag("IS") should return "🇮🇸".', () => {
        expect(getFlag("IS")).toEqual('🇮🇸');
    });
    test('36. getFlag("IN") should return "🇮🇳".', () => {
        expect( getFlag("IN")).toEqual('🇮🇳');
    });
    test('37. getFlag("IR") should return "🇮🇷".', () => {
        expect(getFlag("IR")).toEqual('🇮🇷');
    });
    test('38. getFlag("IE") should return "🇮🇪".', () => {
        expect(getFlag("IE")).toEqual('🇮🇪');
    });
    test('39. getFlag("IL") should return "🇮🇱".', () => {
        expect(getFlag("IL")).toEqual('🇮🇱');
    });
    test('40. getFlag("IT") should return "🇮🇹".', () => {
        expect(getFlag("IT")).toEqual('🇮🇹');
    });
    test('41. getFlag("JM") should return "🇯🇲".', () => {
        expect(getFlag("JM")).toEqual('🇯🇲');
    });
    test('42. getFlag("JP") should return "🇯🇵".', () => {
        expect(getFlag("JP")).toEqual('🇯🇵');
    });
    test('43. getFlag("KZ") should return "🇰🇿".', () => {
        expect(getFlag("KZ")).toEqual('🇰🇿');
    });
    test('44. getFlag("KE") should return "🇰🇪".', () => {
        expect(getFlag("KE")).toEqual('🇰🇪');
    });
    test('45. getFlag("XK") should return "🇽🇰".', () => {
        expect(getFlag("XK")).toEqual('🇽🇰');
    });
    test('46. getFlag("KG") should return "🇰🇬".', () => {
        expect(getFlag("KG")).toEqual('🇰🇬');
    });
    test('47. getFlag("LV") should return "🇱🇻".', () => {
        expect(getFlag("LV")).toEqual('🇱🇻');
    });
    test('48. getFlag("LB") should return "🇱🇧".', () => {
        expect(getFlag("LB")).toEqual('🇱🇧');
    });
    test('49. getFlag("LI") should return "🇱🇮".', () => {
        expect(getFlag("LI")).toEqual('🇱🇮');
    });
    test('50. getFlag("LT") should return "🇱🇹".', () => {
        expect(getFlag("LT")).toEqual('🇱🇹');
    });
    test('51. getFlag("LU") should return "🇱🇺".', () => {
        expect(getFlag("LU")).toEqual('🇱🇺');
    });
    test('52. getFlag("MG") should return "🇲🇬".', () => {
        expect(getFlag("MG")).toEqual('🇲🇬');
    });
    test('53. getFlag("MY") should return "🇲🇾".', () => {
        expect(getFlag("MY")).toEqual('🇲🇾');
    });
    test('54. getFlag("MT") should return "🇲🇹".', () => {
        expect(getFlag("MT")).toEqual('🇲🇹');
    });
    test('55. getFlag("MX") should return "🇲🇽".', () => {
        expect(getFlag("MX")).toEqual('🇲🇽');
    });
    test('56. getFlag("MD") should return "🇲🇩".', () => {
        expect(getFlag("MD")).toEqual('🇲🇩');
    });
    test('57. getFlag("MC") should return "🇲🇨".', () => {
        expect(getFlag("MC")).toEqual('🇲🇨');
    });
    test('58. getFlag("MN") should return "🇲🇳".', () => {
        expect(getFlag("MN")).toEqual('🇲🇳');
    });
    test('59. getFlag("ME") should return "🇲🇪".', () => {
        expect(getFlag("ME")).toEqual('🇲🇪');
    });
    test('60. getFlag("MA") should return "🇲🇦".', () => {
        expect(getFlag("MA")).toEqual('🇲🇦');
    });
    test('61. getFlag("NL") should return "🇳🇱".', () => {
        expect(getFlag("NL")).toEqual('🇳🇱');
    });
    test('62. getFlag("NZ") should return "🇳🇿".', () => {
        expect(getFlag("NZ")).toEqual('🇳🇿');
    });
    test('63. getFlag("NG") should return "🇳🇬".', () => {
        expect(getFlag("NG")).toEqual('🇳🇬');
    });
    test('64. getFlag("MK") should return "🇲🇰".', () => {
        expect(getFlag("MK")).toEqual('🇲🇰');
    });
    test('65. getFlag("NO") should return "🇳🇴".', () => {
        expect(getFlag("NO")).toEqual('🇳🇴');
    });
    test('66. getFlag("PK") should return "🇵🇰".', () => {
        expect(getFlag("PK")).toEqual('🇵🇰');
    });
    test('67. getFlag("PH") should return "🇵🇭".', () => {
        expect(getFlag("PH")).toEqual('🇵🇭');
    });
    test('68. getFlag("PL") should return "🇵🇱".', () => {
        expect(getFlag("PL")).toEqual('🇵🇱');
    });
    test('69. getFlag("PT") should return "🇵🇹".', () => {
        expect(getFlag("PT")).toEqual('🇵🇹');
    });
    test('70. getFlag("PR") should return "🇵🇷".', () => {
        expect(getFlag("PR")).toEqual('🇵🇷');
    });
    test('71. getFlag("RO") should return "🇷🇴".', () => {
        expect(getFlag("RO")).toEqual('🇷🇴');
    });
    test('72. getFlag("SM") should return "🇸🇲".', () => {
        expect(getFlag("SM")).toEqual('🇸🇲');
    });
    test('73. getFlag("SA") should return "🇸🇦".', () => {
        expect(getFlag("SA")).toEqual('🇸🇦');
    });
    test('74. getFlag("RS") should return "🇷🇸".', () => {
        expect(getFlag("RS")).toEqual('🇷🇸');
    });
    test('75. getFlag("SG") should return "🇸🇬".', () => {
        expect(getFlag("SG")).toEqual('🇸🇬');
    });
    test('76. getFlag("SK") should return "🇸🇰".', () => {
        expect(getFlag("SK")).toEqual('🇸🇰');
    });
    test('77. getFlag("SI") should return "🇸🇮".', () => {
        expect(getFlag("SI")).toEqual('🇸🇮');
    });
    test('78. getFlag("ZA") should return "🇿🇦".', () => {
        expect(getFlag("ZA")).toEqual('🇿🇦');
    });
    test('79. getFlag("KR") should return "🇰🇷".', () => {
        expect(getFlag("KR")).toEqual('🇰🇷');
    });
    test('80. getFlag("ES") should return "🇪🇸".', () => {
        expect(getFlag("ES")).toEqual('🇪🇸');
    });
    test('81. getFlag("SE") should return "🇸🇪".', () => {
        expect(getFlag("SE")).toEqual('🇸🇪');
    });
    test('82. getFlag("CH") should return "🇨🇭".', () => {
        expect(getFlag("CH")).toEqual('🇨🇭');
    });
    test('83. getFlag("TH") should return "🇹🇭".', () => {
        expect(getFlag("TH")).toEqual('🇹🇭');
    });
    test('84. getFlag("TT") should return "🇹🇹".', () => {
        expect(getFlag("TT")).toEqual('🇹🇹');
    });
    test('85. getFlag("TR") should return "🇹🇷".', () => {
        expect(getFlag("TR")).toEqual('🇹🇷');
    });
    test('86. getFlag("UA") should return "🇺🇦".', () => {
        expect(getFlag("UA")).toEqual('🇺🇦');
    });
    test('87. getFlag("AE") should return "🇦🇪".', () => {
        expect(getFlag("AE")).toEqual('🇦🇪');
    });
    test('88. getFlag("US") should return "🇺🇸".', () => {
        expect(getFlag("US")).toEqual('🇺🇸');
    });
    test('89. getFlag("UY") should return "🇺🇾".', () => {
        expect(getFlag("UY")).toEqual('🇺🇾');
    });
    test('90. getFlag("UZ") should return "🇺🇿".', () => {
        expect(getFlag("UZ")).toEqual('🇺🇿');
    });
    test('91. getFlag("VE") should return "🇻🇪".', () => {
        expect(getFlag("VE")).toEqual('🇻🇪');
    });
});