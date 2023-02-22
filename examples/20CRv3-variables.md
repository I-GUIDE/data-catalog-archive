# Example of list of variables estimated by a model

This example contains metadata about the 121 estimated climate variables provided by NOAA's 20th Century Reanalysis project. 

``` json
{
    "@content":"https://schema.org/",
    "@type":"DigitalDocument",
    "name":"Variables available in the 20CRV3",
    "description":"",
    "identifier":"vars-20CRV3",
    "Creator":{
        "@type":"Organization",
        "name":"NOAA Physical Sciences Laboratory (PSL)"
    },
    "url":"https://psl.noaa.gov/data/20thC_Rean/20crv3.subdir.table.html",
    "variableMeasured": [
    {
        "@type": "PropertyValue",
        "name": "soill",
        "description": "Liquid Volumetric Soil Moisture (non-frozen) Fraction",
        "minValue": 0.0,
        "maxValue": 1.0,
        "unitText": "frac."
    },
    {
        "@type": "PropertyValue",
        "name": "soilm",
        "description": "soil moisture content",
        "minValue": 0.0,
        "maxValue": 6553.0,
        "unitText": "kg/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "soilw",
        "description": "Volumetric Soil Moisture",
        "minValue": 0.0,
        "maxValue": 1.0,
        "unitText": "frac."
    },
    {
        "@type": "PropertyValue",
        "name": "tsoil",
        "description": "Soil Temperature",
        "minValue": 100.0,
        "maxValue": 500.0,
        "unitText": "Kelvins"
    },
    {
        "@type": "PropertyValue",
        "name": "air",
        "description": "Air temperature",
        "minValue": 100.0,
        "maxValue": 500.0,
        "unitText": "degK"
    },
    {
        "@type": "PropertyValue",
        "name": "rhum",
        "description": "Relative Humidity",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "uwnd",
        "description": "u-wind",
        "minValue": -280.0,
        "maxValue": 350.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "vwnd",
        "description": "v-wind",
        "minValue": -280.0,
        "maxValue": 350.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "air",
        "description": "Air temperature",
        "minValue": 100.0,
        "maxValue": 500.0,
        "unitText": "degK"
    },
    {
        "@type": "PropertyValue",
        "name": "hgt",
        "description": "Geopotential height",
        "minValue": -1500.0,
        "maxValue": 60000.0,
        "unitText": "m"
    },
    {
        "@type": "PropertyValue",
        "name": "omega",
        "description": "Omega (dp/dt)",
        "minValue": -15.0,
        "maxValue": 15.0,
        "unitText": "Pascal/s"
    },
    {
        "@type": "PropertyValue",
        "name": "rhum",
        "description": "Relative Humidity",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "shum",
        "description": "Specific Humidity",
        "minValue": -0.0,
        "maxValue": 0.065,
        "unitText": "kg/kg"
    },
    {
        "@type": "PropertyValue",
        "name": "uwnd",
        "description": "u-wind",
        "minValue": -280.0,
        "maxValue": 350.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "vwnd",
        "description": "v-wind",
        "minValue": -280.0,
        "maxValue": 350.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "acond",
        "description": "aerodynamic conductance",
        "minValue": 0.0,
        "maxValue": 1.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "acpcp",
        "description": "convective precipitation accumulation",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "kg/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "air",
        "description": "Air temperature",
        "minValue": 100.0,
        "maxValue": 500.0,
        "unitText": "degK"
    },
    {
        "@type": "PropertyValue",
        "name": "air",
        "description": "Air Temperature",
        "minValue": 100.0,
        "maxValue": 500.0,
        "unitText": "degK"
    },
    {
        "@type": "PropertyValue",
        "name": "air",
        "description": "Air temperature",
        "minValue": 100.0,
        "maxValue": 500.0,
        "unitText": "degK"
    },
    {
        "@type": "PropertyValue",
        "name": "air",
        "description": "Air temperature",
        "minValue": 100.0,
        "maxValue": 500.0,
        "unitText": "degK"
    },
    {
        "@type": "PropertyValue",
        "name": "albedo",
        "description": "Albedo",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "apcp",
        "description": "Precipitation amount",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "kg/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "cape",
        "description": "convective available potential energy",
        "minValue": 0.0,
        "maxValue": 8000.0,
        "unitText": "J/kg"
    },
    {
        "@type": "PropertyValue",
        "name": "cduvb",
        "description": "Clear Sky UV-B Downward Solar Flux",
        "minValue": 0.0,
        "maxValue": 30.0,
        "unitText": "W m-2"
    },
    {
        "@type": "PropertyValue",
        "name": "cfrzr",
        "description": "categorical freezing rain",
        "minValue": 0.0,
        "maxValue": 1.0,
        "unitText": "1"
    },
    {
        "@type": "PropertyValue",
        "name": "cicep",
        "description": "categorical ice pellets",
        "minValue": 0.0,
        "maxValue": 1.0,
        "unitText": "1"
    },
    {
        "@type": "PropertyValue",
        "name": "cldwtr",
        "description": "Cloud Water Content",
        "minValue": 0.0,
        "maxValue": 20.0,
        "unitText": "kg/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "cpofp",
        "description": "Percent of Frozen Precipitation",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "cprat",
        "description": "Convective Precipitation Rate",
        "minValue": -0.0,
        "maxValue": 0.006,
        "unitText": "kg/m^2/s"
    },
    {
        "@type": "PropertyValue",
        "name": "crain",
        "description": "categorical rain",
        "minValue": 0.0,
        "maxValue": 1.0,
        "unitText": "1"
    },
    {
        "@type": "PropertyValue",
        "name": "csdlf",
        "description": "Clear Sky Downward Longwave Flux",
        "minValue": -100.0,
        "maxValue": 600.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "csdsf",
        "description": "Clear Sky Downward Solar Flux",
        "minValue": -120.0,
        "maxValue": 1300.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "csulf",
        "description": "Clear Sky Upward Longwave Flux",
        "minValue": -100.0,
        "maxValue": 1000.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "csulf",
        "description": "Clear Sky Upward Longwave Flux",
        "minValue": -100.0,
        "maxValue": 1000.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "csusf",
        "description": "Clear Sky Upward Solar Flux",
        "minValue": -100.0,
        "maxValue": 1600.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "csusf",
        "description": "Clear Sky Upward Solar Flux",
        "minValue": -100.0,
        "maxValue": 850.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "dlwrf",
        "description": "Downward Longwave Radiation Flux",
        "minValue": -200.0,
        "maxValue": 800.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "dswrf",
        "description": "Downward Shortwave Radiation Flux",
        "minValue": 0.0,
        "maxValue": 6553.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "dswrf",
        "description": "Downward Solar Radiation Flux",
        "minValue": -200.0,
        "maxValue": 1670.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "duvb",
        "description": "UV-B Downward Solar Flux",
        "minValue": 0.0,
        "maxValue": 30.0,
        "unitText": "W m-2"
    },
    {
        "@type": "PropertyValue",
        "name": "evbs",
        "description": "Direct Evaporation From Bare Soil",
        "minValue": 0.0,
        "maxValue": 700.0,
        "unitText": "W m-2"
    },
    {
        "@type": "PropertyValue",
        "name": "evcw",
        "description": "Canopy Water Evaporation",
        "minValue": 0.0,
        "maxValue": 1000.0,
        "unitText": "W m-2"
    },
    {
        "@type": "PropertyValue",
        "name": "fldcp",
        "description": "Field Capacity",
        "minValue": 0.0,
        "maxValue": 1.0,
        "unitText": "1"
    },
    {
        "@type": "PropertyValue",
        "name": "fricv",
        "description": "frictional velocity",
        "minValue": 0.0,
        "maxValue": 5.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "hgt",
        "description": "Geopotential height",
        "minValue": -1500.0,
        "maxValue": 60000.0,
        "unitText": "m"
    },
    {
        "@type": "PropertyValue",
        "name": "hgt",
        "description": "Geopotential height",
        "minValue": -1500.0,
        "maxValue": 100000.0,
        "unitText": "m"
    },
    {
        "@type": "PropertyValue",
        "name": "hgt",
        "description": "Geopotential height",
        "minValue": -1500.0,
        "maxValue": 60000.0,
        "unitText": "m"
    },
    {
        "@type": "PropertyValue",
        "name": "hpbl",
        "description": "Planetary Boundary Layer Height",
        "minValue": 0.0,
        "maxValue": 65530.0,
        "unitText": "m"
    },
    {
        "@type": "PropertyValue",
        "name": "icec",
        "description": "Ice Concentration",
        "minValue": 0.0,
        "maxValue": 1.0,
        "unitText": "frac."
    },
    {
        "@type": "PropertyValue",
        "name": "icet",
        "description": "ice thickness",
        "minValue": 0.0,
        "maxValue": 6.5,
        "unitText": "m"
    },
    {
        "@type": "PropertyValue",
        "name": "lhtfl",
        "description": "Latent Heat Net Flux",
        "minValue": -3000.0,
        "maxValue": 3000.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "nbdsf",
        "description": "Near IR Beam Downward Solar Flux",
        "minValue": -150.0,
        "maxValue": 700.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "nddsf",
        "description": "Near IR Diffuse Downward Solar Flux",
        "minValue": -120.0,
        "maxValue": 700.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "omega",
        "description": "Omega (dp/dt)",
        "minValue": -15.0,
        "maxValue": 15.0,
        "unitText": "Pascal/s"
    },
    {
        "@type": "PropertyValue",
        "name": "pevpr",
        "description": "Potential Evaporation Rate",
        "minValue": -400.0,
        "maxValue": 6000.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "pottmp",
        "description": "Potential Temperature",
        "minValue": 100.0,
        "maxValue": 650.0,
        "unitText": "degK"
    },
    {
        "@type": "PropertyValue",
        "name": "pr_wtr",
        "description": "Precipitable Water Content",
        "minValue": -50.0,
        "maxValue": 150.0,
        "unitText": "kg/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "prate",
        "description": "Precipitation Rate",
        "minValue": 0.0,
        "maxValue": 0.007,
        "unitText": "kg/m^2/s"
    },
    {
        "@type": "PropertyValue",
        "name": "pres",
        "description": "Cloud Layer Pressure",
        "minValue": 0.0,
        "maxValue": 120000.0,
        "unitText": "Pascals"
    },
    {
        "@type": "PropertyValue",
        "name": "pres",
        "description": "Cloud Layer Pressure",
        "minValue": 0.0,
        "maxValue": 120000.0,
        "unitText": "Pascals"
    },
    {
        "@type": "PropertyValue",
        "name": "pres",
        "description": "Cloud Layer Pressure",
        "minValue": 0.0,
        "maxValue": 120000.0,
        "unitText": "Pascals"
    },
    {
        "@type": "PropertyValue",
        "name": "pres",
        "description": "Cloud Layer Pressure",
        "minValue": 0.0,
        "maxValue": 120000.0,
        "unitText": "Pascals"
    },
    {
        "@type": "PropertyValue",
        "name": "pres",
        "description": "Cloud Layer Pressure",
        "minValue": 0.0,
        "maxValue": 120000.0,
        "unitText": "Pascals"
    },
    {
        "@type": "PropertyValue",
        "name": "pres",
        "description": "Cloud Layer Pressure",
        "minValue": 0.0,
        "maxValue": 120000.0,
        "unitText": "Pascals"
    },
    {
        "@type": "PropertyValue",
        "name": "pres",
        "description": "Pressure",
        "minValue": 46500.0,
        "maxValue": 112000.0,
        "unitText": "Pa"
    },
    {
        "@type": "PropertyValue",
        "name": "pres",
        "description": "Pressure",
        "minValue": 0.0,
        "maxValue": 65500.0,
        "unitText": "Pa"
    },
    {
        "@type": "PropertyValue",
        "name": "prmsl",
        "description": "Mean Sea Level Pressure",
        "minValue": 77000.0,
        "maxValue": 125000.0,
        "unitText": "Pa"
    },
    {
        "@type": "PropertyValue",
        "name": "qmax",
        "description": "Maximum Specific Humidity",
        "minValue": -0.01,
        "maxValue": 0.056,
        "unitText": "kg/kg"
    },
    {
        "@type": "PropertyValue",
        "name": "qmin",
        "description": "Minimum Specific Humidity",
        "minValue": -0.01,
        "maxValue": 0.056,
        "unitText": "kg/kg"
    },
    {
        "@type": "PropertyValue",
        "name": "rhum",
        "description": "Relative Humidity",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "rhum",
        "description": "Relative Humidity",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "rhum",
        "description": "Relative Humidity",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "rhum",
        "description": "Relative Humidity",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "runoff",
        "description": "Water Runoff",
        "minValue": 0.0,
        "maxValue": 65.53,
        "unitText": "kg/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "sbsno",
        "description": "Sublimation (Evaporation From Snow)",
        "minValue": 0.0,
        "maxValue": 500.0,
        "unitText": "W m-2"
    },
    {
        "@type": "PropertyValue",
        "name": "sfcr",
        "description": "Surface Roughness",
        "minValue": -0.007,
        "maxValue": 5.0,
        "unitText": "m"
    },
    {
        "@type": "PropertyValue",
        "name": "sfexc",
        "description": "Exchange Coefficient",
        "minValue": -1.0,
        "maxValue": 1.0,
        "unitText": "(kg m-3) (m s-1)"
    },
    {
        "@type": "PropertyValue",
        "name": "shtfl",
        "description": "Sensible Heat Net Flux",
        "minValue": -2000.0,
        "maxValue": 4500.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "shum",
        "description": "Specific Humidity",
        "minValue": -0.01,
        "maxValue": 0.056,
        "unitText": "kg/kg"
    },
    {
        "@type": "PropertyValue",
        "name": "shum",
        "description": "Specific Humidity",
        "minValue": -0.01,
        "maxValue": 0.056,
        "unitText": "kg/kg"
    },
    {
        "@type": "PropertyValue",
        "name": "skt",
        "description": "Skin Temperature",
        "minValue": 100.0,
        "maxValue": 500.0,
        "unitText": "degK"
    },
    {
        "@type": "PropertyValue",
        "name": "snod",
        "description": "snow depth",
        "minValue": 0.0,
        "maxValue": 65.5,
        "unitText": "m"
    },
    {
        "@type": "PropertyValue",
        "name": "snohf",
        "description": "Snow Phase Change Heat Flux",
        "minValue": -175.0,
        "maxValue": 700.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "snowc",
        "description": "snow cover",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "ssrunoff",
        "description": "storm surface runoff",
        "minValue": 0.0,
        "maxValue": 65.5,
        "unitText": "kg/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "tcdc",
        "description": "Total cloud cover",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "tcdc",
        "description": "Total cloud cover",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "tcdc",
        "description": "Total cloud cover",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "tcdc",
        "description": "Total cloud cover",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "tcdc",
        "description": "Total cloud cover",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "tcdc",
        "description": "Total cloud cover",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "tco3",
        "description": "total columnar ozone",
        "minValue": 0.0,
        "maxValue": 750.0,
        "unitText": "Dobsons"
    },
    {
        "@type": "PropertyValue",
        "name": "tmax",
        "description": "Maximum Temperature",
        "minValue": 100.0,
        "maxValue": 500.0,
        "unitText": "degK"
    },
    {
        "@type": "PropertyValue",
        "name": "tmin",
        "description": "Minimum Temperature",
        "minValue": 100.0,
        "maxValue": 500.0,
        "unitText": "degK"
    },
    {
        "@type": "PropertyValue",
        "name": "tmp",
        "description": "Air temperature at cloud layer top",
        "minValue": 150.0,
        "maxValue": 350.0,
        "unitText": "K"
    },
    {
        "@type": "PropertyValue",
        "name": "tmp",
        "description": "Air temperature at cloud layer top",
        "minValue": 150.0,
        "maxValue": 350.0,
        "unitText": "K"
    },
    {
        "@type": "PropertyValue",
        "name": "tmp",
        "description": "Air temperature at cloud layer top",
        "minValue": 150.0,
        "maxValue": 350.0,
        "unitText": "K"
    },
    {
        "@type": "PropertyValue",
        "name": "trans",
        "description": "transpiration",
        "minValue": 0.0,
        "maxValue": 655.3,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "uflx",
        "description": "Momentum Flux, u-component",
        "minValue": -30.0,
        "maxValue": 30.0,
        "unitText": "N/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "ugwd",
        "description": "Zonal Gravity Wave Stress",
        "minValue": -32.0,
        "maxValue": 32.0,
        "unitText": "N/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "ulwrf",
        "description": "Upward Longwave Radiation Flux",
        "minValue": 0.0,
        "maxValue": 6553.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "ulwrf",
        "description": "Upward Longwave Radiation Flux",
        "minValue": 0.0,
        "maxValue": 6553.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "uswrf",
        "description": "Upward Shortwave Radiation Flux",
        "minValue": 0.0,
        "maxValue": 6553.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "uswrf",
        "description": "Upward Shortwave Radiation Flux",
        "minValue": 0.0,
        "maxValue": 6553.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "uwnd",
        "description": "u-wind",
        "minValue": -300.0,
        "maxValue": 300.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "uwnd",
        "description": "U-wind",
        "minValue": -300.0,
        "maxValue": 300.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "uwnd",
        "description": "u-wind",
        "minValue": -280.0,
        "maxValue": 350.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "uwnd",
        "description": "u-wind",
        "minValue": -280.0,
        "maxValue": 350.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "vbdsf",
        "description": "Visible Beam Downward Solar Flux",
        "minValue": -150.0,
        "maxValue": 700.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "vddsf",
        "description": "Visible Diffuse Downward Solar Flux",
        "minValue": -100.0,
        "maxValue": 700.0,
        "unitText": "W/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "veg",
        "description": "vegetation percent",
        "minValue": 0.0,
        "maxValue": 100.0,
        "unitText": "%"
    },
    {
        "@type": "PropertyValue",
        "name": "vflx",
        "description": "Momentum Flux, v-component",
        "minValue": -30.0,
        "maxValue": 30.0,
        "unitText": "N/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "vgwd",
        "description": "Meridional Gravity Wave Stress",
        "minValue": -32.0,
        "maxValue": 32.0,
        "unitText": "N/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "vwnd",
        "description": "v-wind",
        "minValue": -300.0,
        "maxValue": 300.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "vwnd",
        "description": "V-wind",
        "minValue": -300.0,
        "maxValue": 300.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "vwnd",
        "description": "v-wind",
        "minValue": -280.0,
        "maxValue": 350.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "vwnd",
        "description": "v-wind",
        "minValue": -280.0,
        "maxValue": 350.0,
        "unitText": "m/s"
    },
    {
        "@type": "PropertyValue",
        "name": "vwsh",
        "description": "Vertical Wind Shear",
        "minValue": -0.045,
        "maxValue": 0.045,
        "unitText": "1/s"
    },
    {
        "@type": "PropertyValue",
        "name": "weasd",
        "description": "Water Equiv. of Accum. Snow Depth",
        "minValue": 0.0,
        "maxValue": 65530.0,
        "unitText": "kg/m^2"
    },
    {
        "@type": "PropertyValue",
        "name": "wilt",
        "description": "Wilting Point",
        "minValue": 0.0,
        "maxValue": 1.0,
        "unitText": "1"
    }
    ]
}
```