export const textControls = [
  {
    type: 'text',
    category: 'basic',
    label: 'Button Text',
    valueOf: 'content', 
    component: 'TextField',
    props: {
      variant: 'outlined',
      initialValue: "test"
    },
  },
  
  {
    type: 'select',
    category: 'basic',
    label: 'Text Font',
    valueOf: 'fontFamily',
    component: 'Select',
    options: [
      { label: 'Roboto', value: 'Roboto', import: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' },
      { label: 'Arial', value: 'Arial' }, // Šis šriftas dažniausiai yra sistemoje
      { label: 'Georgia', value: 'Georgia' }, // Šis šriftas dažniausiai yra sistemoje
      { label: 'Times New Roman', value: 'Times New Roman' }, // Šis šriftas dažniausiai yra sistemoje
      { label: 'Bebas Neue', value: 'Bebas Neue', import: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap' },
      { label: 'Courier New', value: 'Courier New' }, // Šis šriftas dažniausiai yra sistemoje
      { label: 'Tahoma', value: 'Tahoma' }, // Šis šriftas dažniausiai yra sistemoje
      { label: 'Verdana', value: 'Verdana' }, // Šis šriftas dažniausiai yra sistemoje
      { label: 'Montserrat', value: 'Montserrat', import: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' },
      { label: 'Open Sans', value: 'Open Sans', import: 'https://fonts.googleapis.com/css2?family=Open+Sans&display=swap' },
      { label: 'Lato', value: 'Lato', import: 'https://fonts.googleapis.com/css2?family=Lato&display=swap' },
      { label: 'Poppins', value: 'Poppins', import: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap' },
      { label: 'Oswald', value: 'Oswald', import: 'https://fonts.googleapis.com/css2?family=Oswald&display=swap' },
      { label: 'Playfair Display', value: 'Playfair Display', import: 'https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap' },
      { label: 'Merriweather', value: 'Merriweather', import: 'https://fonts.googleapis.com/css2?family=Merriweather&display=swap' },
      { label: 'Raleway', value: 'Raleway', import: 'https://fonts.googleapis.com/css2?family=Raleway&display=swap' },
      { label: 'Fira Sans', value: 'Fira Sans', import: 'https://fonts.googleapis.com/css2?family=Fira+Sans&display=swap' },
      { label: 'Ubuntu', value: 'Ubuntu', import: 'https://fonts.googleapis.com/css2?family=Ubuntu&display=swap' },
      { label: 'Exo 2', value: 'Exo 2', import: 'https://fonts.googleapis.com/css2?family=Exo+2&display=swap' },
      { label: 'Slabo 27px', value: 'Slabo 27px', import: 'https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap' },
      { label: 'Quicksand', value: 'Quicksand', import: 'https://fonts.googleapis.com/css2?family=Quicksand&display=swap' }
    ],
    props: {
      variant: 'outlined',
      initialValue: "Bebas Neue"
    },
  },
  {
    type: 'color',
    category: 'basic',
    label: 'Font Color',
    valueOf: 'color',
    component: 'TextField',
    props: {
      variant: 'outlined',
      type: 'color',
      initialValue: "#ff7fff"
    },
  },
  {
    type: 'number',
    category: 'basic',
    label: 'Font Size',
    valueOf: 'fontSize',
    component: 'Slider',
    props: {
      variant: 'outlined',
      type: 'number',
      min: 0,
      max: 50,
      step: 1,
      unit: 'px', 
      initialValue: 16
    },
  },
  {
    type: 'number',
    category: 'basic',
    label: 'Font Weight',
    valueOf: 'fontWeight',
    component: 'Slider',
    props: {
      variant: 'outlined',
      type: 'number',
      min: 100,
      max: 900,
      step: 100,
      initialValue: 400
    },
  },
  {
    type: 'number',
    category: 'advanced',
    label: 'Letter Spacing',
    valueOf: 'letterSpacing',
    component: 'Slider',
    props: {
      min: -5,
      max: 20,
      step: 0.5,
      unit: 'px',
      initialValue: 0
    },
  },
  {
    type: 'number',
    category: 'advanced',
    label: 'Word Spacing',
    valueOf: 'wordSpacing',
    component: 'Slider',
    props: {
      min: 0,
      max: 50,
      step: 1,
      unit: 'px',
      initialValue: 0
    },
  },
];

  
  export const borderRadiusControls = [
    {
      type: 'number',
      label: 'All Corners Border Radius',
      valueOf: 'borderRadius',
      component: 'Slider',
      props: {
        min: 0,
        max: 50,
        step: 1,
        unit: 'px',
        initialValue: 10, 
      },
    },
    {
      type: 'number',
      label: 'Border Top Left Radius',
      valueOf: 'borderTopLeftRadius',
      component: 'Slider',
      props: {
        min: 0,
        max: 50,
        step: 1,
        unit: 'px',
        initialValue: 10, 
      },
    },
    {
      type: 'number',
      label: 'Border Top Right Radius',
      valueOf: 'borderTopRightRadius',
      component: 'Slider',
      props: {
        min: 0,
        max: 50,
        step: 1,
        unit: 'px',
        initialValue: 10, 
      },
    },
    {
      type: 'number',
      label: 'Border Bottom Left Radius',
      valueOf: 'borderBottomLeftRadius',
      component: 'Slider',
      props: {
        min: 0,
        max: 50,
        step: 1,
        unit: 'px',
        initialValue: 10, 
      },
    },
    {
      type: 'number',
      label: 'Border Bottom Right Radius',
      valueOf: 'borderBottomRightRadius',
      component: 'Slider',
      props: {
        min: 0,
        max: 50,
        step: 1,
        unit: 'px',
        initialValue: 10, 
      },
    },
  ];
  
  export const paddingControls = [
    {
      type: 'number',
      label: 'Horizontal Padding',
      component: 'Slider',
      props: {
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 20, 
      },
    },
    {
      type: 'number',
      label: 'Vertical Padding',
      component: 'Slider',
      props: {
        min: 0,
        max: 1000,
        step: 1,
        defaultValue: 50, 
      },
    },
    
  ];
  

  export const borderControls = [
    {
      type: 'switch',
      category: 'basic',
      label: 'Enable Border',
      component: 'Switch',
      props: {
        checked: true, 
      },
    },
    {
      type: 'color',
      category: 'basic',
      label: 'Border Color',
      component: 'TextField',
      props: {
        variant: 'outlined',
        type: 'color',
      },
    },
    {
      type: 'number',
      category: 'basic',
      label: 'Border Size',
      component: 'Slider',
      props: {
        min: 1,
        max: 20,
        step: 1,
        defaultValue: 2,
      },
    },
    {
      type: 'select',
      category: 'advanced',
      label: 'Border Gradient',
      component: 'Select',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Linear Gradient', value: 'linear-gradient' },
      ],
      props: {
        variant: 'outlined',
      },
    },
    {
      type: 'color',
      category: 'advanced',
      label: 'Gradient Start Color',
      component: 'TextField',
      props: {
        variant: 'outlined',
        placeholder: 'e.g., #ff0000',
      },
    },
    {
      type: 'color',
      category: 'advanced',
      label: 'Gradient End Color',
      component: 'TextField',
      props: {
        variant: 'outlined',
        placeholder: 'e.g., #0000ff',
      },
    },
    
  ];


  export const ShadowControls = [
    {
      type: 'select',
      label: 'Select Shadow (Predefined)',
      component: 'Select',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Soft Shadow', value: 'soft' },
        { label: 'Hard Shadow', value: 'hard' },
        { label: 'Inset Shadow', value: 'inset' },
      ],
      props: {
        variant: 'outlined',
      },
    },
    {
      type: 'color',
      label: 'Shadow Color',
      component: 'TextField',
      props: {
        variant: 'outlined',
        type: 'color',
      },
    },
    {
      type: 'number',
      label: 'Horizontal Position',
      component: 'Slider',
      props: {
        min: -50,
        max: 50,
        step: 1,
        defaultValue: 17,
      },
    },
    {
      type: 'number',
      label: 'Vertical Position',
      component: 'Slider',
      props: {
        min: -50,
        max: 50,
        step: 1,
        defaultValue: 0,
      },
    },
    {
      type: 'number',
      label: 'Blur Radius',
      component: 'Slider',
      props: {
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 50,
      },
    },
    {
      type: 'number',
      label: 'Spread Radius',
      component: 'Slider',
      props: {
        min: -50,
        max: 50,
        step: 1,
        defaultValue: 0,
      },
    },
  ];
  


  export const BackgroundControls = [
    {
      type: 'radio',
      label: 'Background Type',
      component: 'RadioGroup',
      options: [
        { label: 'Solid', value: 'solid' },
        { label: 'Gradient', value: 'gradient' },
      ],
      props: {
      },
    },
    {
      type: 'color',
      label: 'Bg Solid Color',
      component: 'TextField',
      props: {
        variant: 'outlined',
        type: 'color',
      },
    },
    {
      type: 'color',
      label: 'Bg Gradient Start',
      component: 'TextField',
      props: {
        variant: 'outlined',
        type: 'color',
      },
    },
    {
      type: 'number',
      label: 'Intensity Color Start',
      component: 'Slider',
      props: {
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 31,
      },
    },
    {
      type: 'color',
      label: 'Bg Gradient End',
      component: 'TextField',
      props: {
        variant: 'outlined',
        type: 'color',
      },
    },
    {
      type: 'number',
      label: 'Intensity Color End',
      component: 'Slider',
      props: {
        min: 0,
        max: 100,
        step: 1,
        defaultValue: 0,
      },
    },
    {
      type: 'number',
      label: 'Gradient Direction',
      component: 'Slider',
      props: {
        min: 0,
        max: 360,
        step: 1,
        valueLabelDisplay: 'auto', 
        valueLabelFormat: (value) => `${value}°`, 
      },
    },
  ];
  

  export const hoverControls = [
    {
      type: 'number',
      label: 'Hover Effect Intensity',
      component: 'Slider',
      props: {
        min: 0,
        max: 10,
        step: 1,
      },
    },
    {
      type: 'number',
      label: 'Change Width on Hover',
      component: 'Slider',
      props: {
        min: 0,
        max: 500,
        step: 1,
      },
    },
    {
      type: 'color',
      label: 'Background Color :hover',
      component: 'TextField',
      props: {
        variant: 'outlined',
        type: 'color',
      },
    },
    {
      type: 'color',
      label: 'Font Color :hover',
      component: 'TextField',
      props: {
        variant: 'outlined',
        type: 'color',
      },
    },
    {
      type: 'color',
      label: 'Border Color :hover',
      component: 'TextField',
      props: {
        variant: 'outlined',
        type: 'color',
      },
    },
    {
      type: 'number',
      label: 'Border Size on Hover',
      component: 'Slider',
      props: {
        min: 0,
        max: 10,
        step: 1,
      },
    },
    {
      type: 'number',
      label: 'Opacity on Hover',
      component: 'Slider',
      props: {
        min: 0,
        max: 1,
        step: 0.1,

      },
    },
    {
      type: 'number',
      label: 'Shadow Intensity on Hover',
      component: 'Slider',
      props: {
        min: 0,
        max: 100,
        step: 1,
      },
    },
  ];
  

  export const buttonIconControls = [
    {
      type: 'switch',
      label: 'Show Icon on Button',
      component: 'Switch',
      props: {
      },
    },
    {
      type: 'select',
      label: 'Icon Position',
      component: 'Select',
      options: [
        { label: 'Left Side', value: 'left' },
        { label: 'Right Side', value: 'right' },
      ],
      props: {
        variant: 'outlined',
      },
    },
    {
      type: 'number',
      label: 'Icon Size',
      component: 'Slider',
      props: {
        min: 8,
        max: 48,
        step: 1,
      },
    },
    {
      type: 'number',
      label: 'Icon Margin Left',
      component: 'Slider',
      props: {
        min: 0,
        max: 20,
        step: 1,
      },
    },
    {
      type: 'number',
      label: 'Icon Margin Right',
      component: 'Slider',
      props: {
        min: 0,
        max: 20,
        step: 1,
      },
    },
    {
      type: 'select',
      label: 'Icon Choice',
      component: 'Select',
      options: [
        { label: 'Icon 1', value: 'icon1' },
        { label: 'Icon 2', value: 'icon2' },
        { label: 'Icon 3', value: 'icon3' },
        { label: 'Icon 4', value: 'icon4' },
        { label: 'Icon 5', value: 'icon5' },
        { label: 'Icon 6', value: 'icon6' },
      ],
      props: {
        variant: 'outlined',
      },
    },
  ]
  