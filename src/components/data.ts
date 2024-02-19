export type UserType = {
  name: string;
  id: number;
  messages: MessagesType;
};

export type UsersType = Array<UserType>;

export type MessagesType = Array<MessageType>;

export type MessageType = {
  messageId: number;
  text: string;
};
export const Users: UsersType = [
  {
    name: "Masha",
    id: 1,
    messages: [
      {
        messageId: 1,
        text: "Quisque id hendrerit arcu, non condimentum leo. Maecenas id urna magna. Fusce quis tincidunt purus, in blandit arcu. Etiam vel dapibus nisi.",
      },
      {
        messageId: 2,
        text: " In pretium dignissim tellus ac suscipit. In hac habitasse platea dictumst. Etiam ac turpis a ipsum sodales ultricies id nec nunc. Maecenas vel consequat libero.",
      },
      {
        messageId: 3,
        text: "Pellentesque mollis justo a ante commodo ullamcorper. Pellentesque posuere nulla eget varius interdum. Praesent lacinia faucibus erat, vel efficitur augue vehicula in. Nulla ultrices consectetur libero non ornare. Donec at ornare neque. Aenean nec augue pretium, cursus arcu a, pulvinar elit. Integer convallis cursus feugiat",
      },
    ],
  },
  {
    name: "Ira",
    id: 2,
    messages: [
      {
        messageId: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum urna ac vulputate euismod. Etiam cursus ex metus, id semper justo ullamcorper nec. Pellentesque nulla nunc, feugiat nec bibendum lacinia, auctor sed lacus. Praesent lacinia imperdiet nisi, sit amet porta metus ultrices a. ",
      },
      {
        messageId: 2,
        text: "Pellentesque nulla nunc, feugiat nec bibendum lacinia, auctor sed lacus. Praesent lacinia imperdiet nisi, sit amet porta metus ultrices a. Nunc nec nulla aliquet, semper erat eu, pulvinar mi. Integer pharetra libero at fermentum molestie. Praesent at tempor erat, placerat tempor nulla.",
      },
      {
        messageId: 3,
        text: "Duis condimentum urna ac vulputate euismod. Etiam cursus ex metus, id semper justo ullamcorper nec. Pellentesque nulla nunc, feugiat nec bibendum lacinia, auctor sed lacus. Praesent lacinia imperdiet nisi, sit amet porta metus ultrices a. ",
      },
    ],
  },
  {
    name: "Vasya",
    id: 3,
    messages: [
      {
        messageId: 1,
        text: " adipiscing elit. Duis condimentum urna ac vulputate euismod. ",
      },
      {
        messageId: 2,
        text: "Pellentesque nulla nunc, feugiat nec bibendum lacinia, auctor sed lacus. Praesent lacinia imperdiet nisi, sit amet porta metus ultrices a. Nunc nec nulla aliquet, semper erat eu, pulvinar mi. Integer pharetra libero at fermentum molestie. Praesent at",
      },
      {
        messageId: 3,
        text: "Lorem ipsum dolor sit amet",
      },
    ],
  },
  {
    name: "Petya",
    id: 4,
    messages: [
      {
        messageId: 1,
        text: "Praesent at tempor erat, placerat tempor nulla.",
      },
      {
        messageId: 2,
        text: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla sapien magna, posuere ut velit id, pellentesque rhoncus diam. Curabitur mollis justo et est pulvinar, id euismod nunc dictum. Mauris dolor quam, viverra quis ultricies sed, ornare ut elit.",
      },
      {
        messageId: 3,
        text: "Mauris dolor quam, viverra quis ultricies sed, ornare ut elit. ",
      },
    ],
  },
];
export type OldPostsType = Array<OldPostType>

export type OldPostType = {
    id: number
    text: string
}
export const OldPost: OldPostsType = [   
      {
        id: 1,
        text: "Quisque id hendrerit arcu, non condimentum leo. Maecenas id urna magna. Fusce quis tincidunt purus, in blandit arcu. Etiam vel dapibus nisi.",
      },
      {
        id: 2,
        text: " In pretium dignissim tellus ac suscipit. In hac habitasse platea dictumst. Etiam ac turpis a ipsum sodales ultricies id nec nunc. Maecenas vel consequat libero.",
      },
      {
        id: 3,
        text: "Pellentesque mollis justo a ante commodo ullamcorper. Pellentesque posuere nulla eget varius interdum. Praesent lacinia faucibus erat, vel efficitur augue vehicula in. Nulla ultrices consectetur libero non ornare. Donec at ornare neque. Aenean nec augue pretium, cursus arcu a, pulvinar elit. Integer convallis cursus feugiat",
      },
      {
        id: 4,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum urna ac vulputate euismod. Etiam cursus ex metus, id semper justo ullamcorper nec. Pellentesque nulla nunc, feugiat nec bibendum lacinia, auctor sed lacus. Praesent lacinia imperdiet nisi, sit amet porta metus ultrices a. ",
      },
      {
        id: 5,
        text: "Pellentesque nulla nunc, feugiat nec bibendum lacinia, auctor sed lacus. Praesent lacinia imperdiet nisi, sit amet porta metus ultrices a. Nunc nec nulla aliquet, semper erat eu, pulvinar mi. Integer pharetra libero at fermentum molestie. Praesent at tempor erat, placerat tempor nulla.",
      },
      {
        id: 6,
        text: "Duis condimentum urna ac vulputate euismod. Etiam cursus ex metus, id semper justo ullamcorper nec. Pellentesque nulla nunc, feugiat nec bibendum lacinia, auctor sed lacus. Praesent lacinia imperdiet nisi, sit amet porta metus ultrices a. ",
      },
    ]
 
  