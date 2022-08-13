import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.GRAPHIC_CMS_ENDPOINT);

export const getAllPosts = gql`
  {
    posts {
      id
      title
      slug
      createdAt
      image {
        url
      }
      author {
        id
        name
        bio
        avatar {
          url
        }
      }
    }
  }
`;

export const getPost = gql`
  query MyQuery($slug: String!) {
    post(where: { slug: $slug }) {
      id
      author {
        bio
        id
        name
        avatar {
          url
        }
      }
      categories {
        name
        id
        slug
      }
      createdAt
      image {
        id
        url
      }
      slug
      title
      content {
        html
      }
    }
  }
`;
