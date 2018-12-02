export default {
  name: 'Tim',
  groups: [
    {
      name: '53 Worthing Road',
      members: [
        {
          name: 'Max',
          email: 'max-fm@hotmail.co.uk',
        },
        {
          name: 'Max',
          email: 'samuel.patrick@port.ac.uk',
        }
      ],
      costs: [
        {
          by: 'Tim',
          value: 40,
          tags: ['groceries', 'takeaway'],
          sharedWith: [
            {
              name: 'Max',
              amount: 0.5
            }
          ]
        }
      ],
      payments: [
        {
          by: 'Max',
          to: 'Tim',
          value: 20.0,
        },
        {
          by: 'Max',
          to: 'Sam',
          value: 4.2,
        }
      ]
    },
    {
      name: 'ICG Christmas Meal',
      members: [
        {
          name: 'Lizi',
          email: 'max-fm@hotmail.co.uk',
        },
        {
          name: 'Tim',
          email: 'samuel.patrick@port.ac.uk',
        }
      ],
      costs: [
        {
          by: 'Lizi',
          value: 32,
          tags: ['Christmas Meal'],
          sharedWith: [
            {
              name: 'Lizi',
              amount: 0.5
            }
          ],
        }
      ],
      payments: [
        {
          by: 'Tim',
          to: 'Lizi',
          value: 20.0,
        },
      ]
    },
  ],
};
