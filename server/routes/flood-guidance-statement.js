const boom = require('@hapi/boom')
// const s3Service = require('../services/s3')
const fakeData = {
  id: 1341,
  issued_at: '2023-10-09T10:29:10Z',
  pdf_url: 'https://s3-eu-west-1.amazonaws.com/assets.ffc-environment-agency.uat.fgs.metoffice.gov.uk/fgs-statements/01341-2022-03-15_1029/fgs.pdf',
  detailed_csv_url: 'https://s3-eu-west-1.amazonaws.com/assets.ffc-environment-agency.uat.fgs.metoffice.gov.uk/fgs-statements/01341-2022-03-15_1029/detailed.csv',
  area_of_concern_url: 'https://s3-eu-west-1.amazonaws.com/assets.ffc-environment-agency.uat.fgs.metoffice.gov.uk/fgs-statements/01341-2022-03-15_1029/areaofconcern.jpg',
  flood_risk_trend: {
    day1: 'increasing',
    day2: 'increasing',
    day3: 'stable',
    day4: 'stable',
    day5: 'stable'
  },
  sources: [{
    river: 'TEST - Severe river flooding impacts are possible.'
  }, {
    surface: 'TEST - Severe surface water flooding impacts are possible.'
  }, {
    coastal: 'TEST'
  }, {
    ground: 'TEST'
  }],
  headline: 'TEST - Severe inland flooding impacts are possible.',
  amendments: '',
  future_forecast: 'TEST',
  last_modified_at: '2022-03-15T09:29:10Z',
  next_issue_due_at: '2022-03-16T10:30:00Z',
  png_thumbnails_with_days_url: 'https://s3-eu-west-1.amazonaws.com/assets.ffc-environment-agency.uat.fgs.metoffice.gov.uk/fgs-statements/01341-2022-02-04_1030/FGSthumbnails-with-days.png',
  risk_areas: [{
    id: 3841,
    statement_id: 1341,
    updated_at: '2022-03-15T06:29:10Z',
    beyond_five_days: false,
    ordering: 1,
    risk_area_blocks: [{
      id: 5072,
      days: [2, 1],
      risk_area_id: 3841,
      risk_levels: {
        river: [4, 2],
        surface: [4, 2]
      },
      additional_information: 'Severe inland flooding impacts are possible today and tomorrow.',
      polys: [{
        id: 8236,
        coordinates: [
          [
            [-1.68091, 50.49246],
            [-1.69289, 50.59447],
            [-1.64913, 50.73164],
            [-1.55826, 50.89612],
            [-1.42894, 51.08009],
            [-1.2698, 51.27568],
            [-1.08951, 51.47508],
            [-0.89669, 51.67042],
            [-0.7, 51.85386],
            [-0.50809, 52.01758],
            [-0.32959, 52.15371],
            [-0.14218, 52.27767],
            [0.07368, 52.40481],
            [0.30874, 52.52972],
            [0.55374, 52.64702],
            [0.79941, 52.75131],
            [1.0365, 52.83721],
            [1.25575, 52.89933],
            [1.4479, 52.93226],
            [1.60369, 52.93062],
            [1.71387, 52.88902],
            [1.76752, 52.82056],
            [1.79718, 52.72005],
            [1.80663, 52.59383],
            [1.79968, 52.44823],
            [1.78011, 52.28959],
            [1.75173, 52.12424],
            [1.71833, 51.95851],
            [1.6837, 51.79874],
            [1.65165, 51.65127],
            [1.62598, 51.52242],
            [1.61214, 51.43082],
            [1.60223, 51.33996],
            [1.59391, 51.25052],
            [1.58485, 51.1632],
            [1.57272, 51.07868],
            [1.55518, 50.99767],
            [1.5299, 50.92086],
            [1.49455, 50.84894],
            [1.44678, 50.7826],
            [1.38428, 50.72255],
            [1.19329, 50.61922],
            [0.90842, 50.52809],
            [0.55525, 50.45128],
            [0.15935, 50.3909],
            [-0.2537, 50.34908],
            [-0.65832, 50.32794],
            [-1.02893, 50.32958],
            [-1.33995, 50.35614],
            [-1.5658, 50.40973],
            [-1.68091, 50.49246]
          ]
        ],
        area: 4.61293971228198,
        label_position: [0.542724609375, 51.5560322333098],
        poly_type: 'inland',
        risk_area_block_id: 5072,
        counties: [{
          name: 'Suffolk'
        }, {
          name: 'Surrey'
        }, {
          name: 'W Sussex'
        }, {
          name: 'Luton'
        }, {
          name: 'Southend-on-Sea'
        }, {
          name: 'Thurrock'
        }, {
          name: 'Medway'
        }, {
          name: 'Bracknell Forest'
        }, {
          name: 'Slough'
        }, {
          name: 'Windsor and Maidenhead'
        }, {
          name: 'Wokingham'
        }, {
          name: 'Brighton and Hove'
        }, {
          name: 'Portsmouth'
        }, {
          name: 'Southampton'
        }, {
          name: 'Isle of Wight'
        }, {
          name: 'Gtr London'
        }, {
          name: 'Bedfordshire'
        }, {
          name: 'Buckinghamshire'
        }, {
          name: 'Cambridgeshire'
        }, {
          name: 'E Sussex'
        }, {
          name: 'Essex'
        }, {
          name: 'Hampshire'
        }, {
          name: 'Hertfordshire'
        }, {
          name: 'Kent'
        }, {
          name: 'Norfolk'
        }],
        z_index: 2
      }]
    }]
  }, {
    id: 3840,
    statement_id: 1341,
    updated_at: '2022-03-15T06:29:10Z',
    beyond_five_days: false,
    ordering: 0,
    risk_area_blocks: [{
      id: 5071,
      days: [1],
      risk_area_id: 3840,
      risk_levels: {
        surface: [4, 2]
      },
      additional_information: 'Severe surface water flooding impacts are possible today.',
      polys: [{
        id: 8235,
        coordinates: [
          [
            [-1.81274, 56.07663],
            [-1.95851, 56.06167],
            [-2.11686, 56.00204],
            [-2.28512, 55.90573],
            [-2.46062, 55.78075],
            [-2.64067, 55.63508],
            [-2.82261, 55.47675],
            [-3.00375, 55.31373],
            [-3.18141, 55.15403],
            [-3.35293, 55.00566],
            [-3.51563, 54.87661],
            [-3.66144, 54.77584],
            [-3.81613, 54.67974],
            [-3.97502, 54.58654],
            [-4.13343, 54.49445],
            [-4.28669, 54.40168],
            [-4.43012, 54.30647],
            [-4.55904, 54.20702],
            [-4.66878, 54.10156],
            [-4.75467, 53.98831],
            [-4.81201, 53.86549],
            [-4.8441, 53.72808],
            [-4.85905, 53.57123],
            [-4.85694, 53.40105],
            [-4.83788, 53.22362],
            [-4.80195, 53.04506],
            [-4.74925, 52.87146],
            [-4.67987, 52.70893],
            [-4.5939, 52.56357],
            [-4.49143, 52.44148],
            [-4.37256, 52.34876],
            [-4.05861, 52.2502],
            [-3.59661, 52.21958],
            [-3.02741, 52.24835],
            [-2.39185, 52.328],
            [-1.73079, 52.44999],
            [-1.08508, 52.60578],
            [-0.49556, 52.78685],
            [-0.00308, 52.98467],
            [0.3515, 53.19071],
            [0.52734, 53.39643],
            [0.53864, 53.54835],
            [0.4808, 53.72174],
            [0.36654, 53.91138],
            [0.20858, 54.11203],
            [0.01963, 54.31846],
            [-0.18759, 54.52544],
            [-0.40037, 54.72772],
            [-0.60597, 54.92008],
            [-0.7917, 55.09727],
            [-0.94482, 55.25408],
            [-1.03596, 55.35977],
            [-1.12203, 55.46889],
            [-1.20458, 55.57821],
            [-1.28515, 55.68448],
            [-1.36526, 55.78446],
            [-1.44645, 55.87491],
            [-1.53026, 55.9526],
            [-1.61823, 56.01427],
            [-1.71187, 56.0567],
            [-1.81274, 56.07663]
          ]
        ],
        area: 10.836291012671602,
        label_position: [-2.4884033203125, 54.3029997919359],
        poly_type: 'inland',
        risk_area_block_id: 5071,
        counties: [{
          name: 'Shropshire'
        }, {
          name: 'Staffordshire'
        }, {
          name: 'Hartlepool'
        }, {
          name: 'Middlesbrough'
        }, {
          name: 'Redcar and Cleveland'
        }, {
          name: 'Stockton-on-Tees'
        }, {
          name: 'Darlington'
        }, {
          name: 'Halton'
        }, {
          name: 'Warrington'
        }, {
          name: 'Blackburn with Darwen'
        }, {
          name: 'Blackpool'
        }, {
          name: 'Kingston upon Hull'
        }, {
          name: 'E Riding of Yorkshire'
        }, {
          name: 'NE Lincolnshire'
        }, {
          name: 'N Lincolnshire'
        }, {
          name: 'York'
        }, {
          name: 'Derby'
        }, {
          name: 'Telford and Wrekin'
        }, {
          name: 'Stoke-on-Trent'
        }, {
          name: 'Isle of Anglesey'
        }, {
          name: 'Gwynedd'
        }, {
          name: 'Conwy'
        }, {
          name: 'Denbighshire'
        }, {
          name: 'Flintshire'
        }, {
          name: 'Wrexham'
        }, {
          name: 'Powys'
        }, {
          name: 'Ceredigion'
        }, {
          name: 'Merseyside'
        }, {
          name: 'S Yorkshire'
        }, {
          name: 'Tyne and Wear'
        }, {
          name: 'W Yorkshire'
        }, {
          name: 'Gtr Manchester'
        }, {
          name: 'Cheshire'
        }, {
          name: 'Cumbria'
        }, {
          name: 'Derbyshire'
        }, {
          name: 'Durham'
        }, {
          name: 'Lancashire'
        }, {
          name: 'Lincolnshire'
        }, {
          name: 'Northumberland'
        }, {
          name: 'Nottinghamshire'
        }, {
          name: 'N Yorkshire'
        }],
        z_index: 2
      }]
    }]
  }],
  aoc_maps: [{
    id: 2721,
    title: 'AOC Map',
    ordering: 0,
    caption: 'TEST - Severe flooding is possible',
    ratio: [{
      top_left: [56.074623079695954, 3.6605123989284043]
    }, {
      top_right: [56.074623079695954, -6.165395546704532]
    }, {
      bottom_right: [50.3144476501053, -6.165395546704532]
    }, {
      top_left: [56.074623079695954, -6.165395546704532]
    }],
    statement_id: 1341,
    polys: [{
      id: 8235,
      coordinates: [
        [
          [-1.81274, 56.07663],
          [-1.95851, 56.06167],
          [-2.11686, 56.00204],
          [-2.28512, 55.90573],
          [-2.46062, 55.78075],
          [-2.64067, 55.63508],
          [-2.82261, 55.47675],
          [-3.00375, 55.31373],
          [-3.18141, 55.15403],
          [-3.35293, 55.00566],
          [-3.51563, 54.87661],
          [-3.66144, 54.77584],
          [-3.81613, 54.67974],
          [-3.97502, 54.58654],
          [-4.13343, 54.49445],
          [-4.28669, 54.40168],
          [-4.43012, 54.30647],
          [-4.55904, 54.20702],
          [-4.66878, 54.10156],
          [-4.75467, 53.98831],
          [-4.81201, 53.86549],
          [-4.8441, 53.72808],
          [-4.85905, 53.57123],
          [-4.85694, 53.40105],
          [-4.83788, 53.22362],
          [-4.80195, 53.04506],
          [-4.74925, 52.87146],
          [-4.67987, 52.70893],
          [-4.5939, 52.56357],
          [-4.49143, 52.44148],
          [-4.37256, 52.34876],
          [-4.05861, 52.2502],
          [-3.59661, 52.21958],
          [-3.02741, 52.24835],
          [-2.39185, 52.328],
          [-1.73079, 52.44999],
          [-1.08508, 52.60578],
          [-0.49556, 52.78685],
          [-0.00308, 52.98467],
          [0.3515, 53.19071],
          [0.52734, 53.39643],
          [0.53864, 53.54835],
          [0.4808, 53.72174],
          [0.36654, 53.91138],
          [0.20858, 54.11203],
          [0.01963, 54.31846],
          [-0.18759, 54.52544],
          [-0.40037, 54.72772],
          [-0.60597, 54.92008],
          [-0.7917, 55.09727],
          [-0.94482, 55.25408],
          [-1.03596, 55.35977],
          [-1.12203, 55.46889],
          [-1.20458, 55.57821],
          [-1.28515, 55.68448],
          [-1.36526, 55.78446],
          [-1.44645, 55.87491],
          [-1.53026, 55.9526],
          [-1.61823, 56.01427],
          [-1.71187, 56.0567],
          [-1.81274, 56.07663]
        ]
      ],
      area: 10.836291012671602,
      label_position: [-2.4884033203125, 54.3029997919359],
      poly_type: 'inland',
      risk_area_block_id: 5071,
      counties: [{
        name: 'Shropshire'
      }, {
        name: 'Staffordshire'
      }, {
        name: 'Hartlepool'
      }, {
        name: 'Middlesbrough'
      }, {
        name: 'Redcar and Cleveland'
      }, {
        name: 'Stockton-on-Tees'
      }, {
        name: 'Darlington'
      }, {
        name: 'Halton'
      }, {
        name: 'Warrington'
      }, {
        name: 'Blackburn with Darwen'
      }, {
        name: 'Blackpool'
      }, {
        name: 'Kingston upon Hull'
      }, {
        name: 'E Riding of Yorkshire'
      }, {
        name: 'NE Lincolnshire'
      }, {
        name: 'N Lincolnshire'
      }, {
        name: 'York'
      }, {
        name: 'Derby'
      }, {
        name: 'Telford and Wrekin'
      }, {
        name: 'Stoke-on-Trent'
      }, {
        name: 'Isle of Anglesey'
      }, {
        name: 'Gwynedd'
      }, {
        name: 'Conwy'
      }, {
        name: 'Denbighshire'
      }, {
        name: 'Flintshire'
      }, {
        name: 'Wrexham'
      }, {
        name: 'Powys'
      }, {
        name: 'Ceredigion'
      }, {
        name: 'Merseyside'
      }, {
        name: 'S Yorkshire'
      }, {
        name: 'Tyne and Wear'
      }, {
        name: 'W Yorkshire'
      }, {
        name: 'Gtr Manchester'
      }, {
        name: 'Cheshire'
      }, {
        name: 'Cumbria'
      }, {
        name: 'Derbyshire'
      }, {
        name: 'Durham'
      }, {
        name: 'Lancashire'
      }, {
        name: 'Lincolnshire'
      }, {
        name: 'Northumberland'
      }, {
        name: 'Nottinghamshire'
      }, {
        name: 'N Yorkshire'
      }],
      z_index: 2
    }, {
      id: 8236,
      coordinates: [
        [
          [-1.68091, 50.49246],
          [-1.69289, 50.59447],
          [-1.64913, 50.73164],
          [-1.55826, 50.89612],
          [-1.42894, 51.08009],
          [-1.2698, 51.27568],
          [-1.08951, 51.47508],
          [-0.89669, 51.67042],
          [-0.7, 51.85386],
          [-0.50809, 52.01758],
          [-0.32959, 52.15371],
          [-0.14218, 52.27767],
          [0.07368, 52.40481],
          [0.30874, 52.52972],
          [0.55374, 52.64702],
          [0.79941, 52.75131],
          [1.0365, 52.83721],
          [1.25575, 52.89933],
          [1.4479, 52.93226],
          [1.60369, 52.93062],
          [1.71387, 52.88902],
          [1.76752, 52.82056],
          [1.79718, 52.72005],
          [1.80663, 52.59383],
          [1.79968, 52.44823],
          [1.78011, 52.28959],
          [1.75173, 52.12424],
          [1.71833, 51.95851],
          [1.6837, 51.79874],
          [1.65165, 51.65127],
          [1.62598, 51.52242],
          [1.61214, 51.43082],
          [1.60223, 51.33996],
          [1.59391, 51.25052],
          [1.58485, 51.1632],
          [1.57272, 51.07868],
          [1.55518, 50.99767],
          [1.5299, 50.92086],
          [1.49455, 50.84894],
          [1.44678, 50.7826],
          [1.38428, 50.72255],
          [1.19329, 50.61922],
          [0.90842, 50.52809],
          [0.55525, 50.45128],
          [0.15935, 50.3909],
          [-0.2537, 50.34908],
          [-0.65832, 50.32794],
          [-1.02893, 50.32958],
          [-1.33995, 50.35614],
          [-1.5658, 50.40973],
          [-1.68091, 50.49246]
        ]
      ],
      area: 4.61293971228198,
      label_position: [0.542724609375, 51.5560322333098],
      poly_type: 'inland',
      risk_area_block_id: 5072,
      counties: [{
        name: 'Suffolk'
      }, {
        name: 'Surrey'
      }, {
        name: 'W Sussex'
      }, {
        name: 'Luton'
      }, {
        name: 'Southend-on-Sea'
      }, {
        name: 'Thurrock'
      }, {
        name: 'Medway'
      }, {
        name: 'Bracknell Forest'
      }, {
        name: 'Slough'
      }, {
        name: 'Windsor and Maidenhead'
      }, {
        name: 'Wokingham'
      }, {
        name: 'Brighton and Hove'
      }, {
        name: 'Portsmouth'
      }, {
        name: 'Southampton'
      }, {
        name: 'Isle of Wight'
      }, {
        name: 'Gtr London'
      }, {
        name: 'Bedfordshire'
      }, {
        name: 'Buckinghamshire'
      }, {
        name: 'Cambridgeshire'
      }, {
        name: 'E Sussex'
      }, {
        name: 'Essex'
      }, {
        name: 'Hampshire'
      }, {
        name: 'Hertfordshire'
      }, {
        name: 'Kent'
      }, {
        name: 'Norfolk'
      }],
      z_index: 2
    }]
  }],
  public_forecast: {
    id: 1319,
    english_forecast: 'TEST: Public 5 day forecast English.',
    welsh_forecast: 'TEST: Public 5 day forecast Welsh.',
    england_forecast: 'TEST: Public 5 Day Forecast English',
    wales_forecast_english: 'TEST: Public 5 Day Forecast English',
    wales_forecast_welsh: 'TEST: Public 5 Day Forecast Welsh',
    published_at: null
  }
}

module.exports = {
  method: 'GET',
  path: '/flood-guidance-statement',
  options: {
    description: 'Get the flood guidance statement'
  },
  handler: async () => {
    try {
      // return await s3Service.floodGuidanceStatement()
      return fakeData
    } catch (err) {
      console.log(err)
      return boom.badRequest('Failed to get the flood guidance statement', err)
    }
  }
}
