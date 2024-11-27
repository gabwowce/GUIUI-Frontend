export const textControls = [
    {
      type: 'text',
      category: 'basic',
      label: 'Button Text',
      component: 'TextField',
      props: {
        variant: 'outlined',
        
      },
    },
    {
      type: 'select',
      category: 'basic',
      label: 'Text Font',
      component: 'Select',
      options: [
        { label: 'Roboto', value: 'Roboto' },
        { label: 'Arial', value: 'Arial' },
        { label: 'Georgia', value: 'Georgia' },
        { label: 'Times New Roman', value: 'Times New Roman' },
        { label: 'Verdana', value: 'Verdana' },
      ],
      props: {
        variant: 'outlined',
       
      },
    },
    {
      type: 'color',
      category: 'basic',
      label: 'Font Color',
      component: 'TextField',
      props: {
        variant: 'outlined',
        type: 'color',
        
      },
    },
    {
      type: 'number',
      category: 'basic',
      label: 'Font Size',
      component: 'Slider',
      props: {
        variant: 'outlined',
        type: 'number',
        
        min: 0,
        max: 50,
        step: 1,
      },
    },
    {
      type: 'number',
      category: 'basic',
      label: 'Font Weight',
      component: 'Slider',
      props: {
        variant: 'outlined',
        type: 'number',
       
        min: 100,
        max: 900,
        step: 100,
      },
    },
    {
      type: 'switch',
      category: 'basic',
      label: 'Switch to Uppercase',
      component: 'Switch',
      props: {
        checked: 'Uppercase',
        
      },
    },
    {
      type: 'number',
      category: 'advanced',
      label: 'Letter Spacing',
      component: 'Slider',
      props: {
        
        min: -5,
        max: 20,
        step: 0.5,
      },
    },
    {
      type: 'number',
      category: 'advanced',
      label: 'Word Spacing',
      component: 'Slider',
      props: {
        
        min: 0,
        max: 50,
        step: 1,
      },
    },
    {
      type: 'gradient',
      category: 'advanced',
      label: 'Text Gradient',
      component: 'TextField',
      props: {
        variant: 'outlined',
        placeholder: 'e.g., linear-gradient(to right, red, blue)',
        
      },
    },
    
    
  ];
  
  export const borderRadiusControls = [
    {
      type: 'number',
      label: 'All Corners Border Radius',
      component: 'Slider',
      props: {
        min: 0,
        max: 50,
        step: 1,
        defaultValue: 10, 
      },
    },
    {
      type: 'number',
      label: 'Border Top Left Radius',
      component: 'Slider',
      props: {
        min: 0,
        max: 50,
        step: 1,
        defaultValue: 10, 
      },
    },
    {
      type: 'number',
      label: 'Border Top Right Radius',
      component: 'Slider',
      props: {
        min: 0,
        max: 50,
        step: 1,
        defaultValue: 10, 
      },
    },
    {
      type: 'number',
      label: 'Border Bottom Left Radius',
      component: 'Slider',
      props: {
        min: 0,
        max: 50,
        step: 1,
        defaultValue: 10, 
      },
    },
    {
      type: 'number',
      label: 'Border Bottom Right Radius',
      component: 'Slider',
      props: {
        min: 0,
        max: 50,
        step: 1,
        defaultValue: 10, 
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
      type: 'text',
      category: 'advanced',
      label: 'Gradient Start Color',
      component: 'TextField',
      props: {
        variant: 'outlined',
        placeholder: 'e.g., #ff0000',
      },
    },
    {
      type: 'text',
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
  