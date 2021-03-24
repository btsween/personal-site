module.exports = {
  projects: [
    {
      name: "Compound Interest Calculator",
      description:
        "Caclulate and graph the value of a portfolio according with experimental values for time, rate of return and more, all while learning about the exponential math of compounding interest.",
      links: {
        deployed: "https://www.apps.bryansweeney.io",
        github: "https://github.com/btsween/compound-interest-calculator",
      },
      tech: ["React", "CSS", "Node.js", "Docker"],
      assets: [
        {
          type: "video",
          name: "cic-recording-wide",
        },
        {
          type: "photo",
          name: "cic-top-wide",
        },
        {
          type: "photo",
          name: "cic-bottom-wide",
        },
        {
          type: "photo",
          name: "cic-top-narrow",
        },
        {
          type: "photo",
          name: "cic-bottom-narrow",
        },
      ],
      id: "compound-interest",
    },
    {
      name: "Bluetooth Beacon Map",
      description:
        "Scan QR codes to connect to bluetooth beacons on this mobile app. Get familiar with new venues by viewing beacons organized into regions, sub-regions, and showing relative distance to landmarks.",
      tech: ["React Native", "Bluetooth Low Energy"],
      assets: [
        {
          type: "video",
          name: "ble-show-beacon",
        },
        {
          type: "photo",
          name: "ble-region-screen",
        },
        {
          type: "photo",
          name: "ble-subregion-screen",
        },
        {
          type: "photo",
          name: "ble-beacon-screen",
        },
        {
          type: "video",
          name: "ble-add-beacon",
        },
      ],
      id: "bluetooth",
    },
    {
      name: "StockWatch",
      description:
        "Automatically track the s&p500 with Python and yfinance to look for market opportunites. You won't miss your chance with automated SMS messages through Twilio.",
      links: {
        github: "https://github.com/btsween/stock-watch",
      },
      tech: ["Python", "Twilio", "Cron"],
      assets: [
        {
          type: "photo",
          name: "stock-watch-text",
        },
      ],
      id: "stock-watch",
    },
    {
      name: "Personal Website",
      description:
        "This very site! Built ground up with CSS and React to be fully dynamic.",
      links: {
        github: "https://github.com/btsween/personal-site",
      },
      tech: ["React", "CSS", "Node.js", "Docker"],
      id: "personal-website",
    },
  ],
};
