const config = {
      appwriteUrl: String(import.meta.env.VITE_APP_APPWRITE)
      appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID)
      appwriteDatabaseId: String(import.meta.env.VITE_APPAPPWRITE_DATABASE_ID)
      appwriteCollectionId: String(import.meta.env.VITE_APPAPPWRITE_COLLECTION_ID)
      appwriteBucketId: String(import.meta.env.VITE_APPAPPWRITE_BUCKET_ID)
}
export default config;