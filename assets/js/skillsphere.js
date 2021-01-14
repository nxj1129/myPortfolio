$(document).ready(function () {
    var entries = [
      {
        image: "/assets/icons/html5-icon.svg",
        width: "50",
        height: "50",
        target: "_top",
      },
      {
        image: "/assets/icons/css3-icon.svg",
        width: "50",
        height: "50",
        target: "_top",
      },
      {
        image: "/assets/icons/bootstrap-icon.svg",
        width: "50",
        height: "50",
        target: "_top",
      },
      {
        image: "/assets/icons/swift-icon.svg",
        width: "50",
        height: "50",
        target: "_top",
      },
      {
        image: "/assets/icons/kotlin-icon.svg",
        width: "100",
        height: "100",
        target: "_top",
      },
      {
        image: "/assets/icons/mysql-icon.svg",
        width: "60",
        height: "60",
        target: "_top",
      },
      {
        image: "/assets/icons/javascript-icon.svg",
        width: "50",
        height: "50",
        target: "_top",
      },
      {
        image: "/assets/icons/react-icon.svg",
        width: "50",
        height: "50",
        target: "_top",
      },
      {
        image: "/assets/icons/github-icon.svg",
        width: "50",
        height: "50",
        target: "_top",
      },
      {
        image: "/assets/icons/typescript-icon.svg",
        width: "50",
        height: "50",
        target: "_top",
      },
      {
        image: "/assets/icons/android-icon.svg",
        width: "50",
        height: "50",
        target: "_top",
      },
      {
        image: "/assets/icons/apple-icon.svg",
        width: "50",
        height: "50",
        target: "_top",
      },
    ];

    var settings = {
      entries: entries,
      width: 400,
      height: 400,
      radius: "65%",
      radiusMin: 85,
      bgDraw: true,
      bgColor: "#0e050f",
      opacityOver: 1.0,
      opacityOut: 0.05,
      opacitySpeed: 6,
      fov: 800,
      speed: 1,
      fontFamily: "Oswald, Arial, sans-serif",
      fontSize: "15",
      fontColor: "#fff",
      fontWeight: "normal", //bold
      fontStyle: "normal", //italic
      fontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
      fontToUpperCase: true,
      tooltipFontFamily: "Oswald, Arial, sans-serif",
      tooltipFontSize: "11",
      tooltipFontColor: "#fff",
      tooltipFontWeight: "normal", //bold
      tooltipFontStyle: "normal", //italic
      tooltipFontStretch: "normal", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
      tooltipFontToUpperCase: false,
      tooltipTextAnchor: "left",
      tooltipDiffX: 0,
      tooltipDiffY: 10,
    };

    //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
    $("#tagcloud").svg3DTagCloud(settings);
  });