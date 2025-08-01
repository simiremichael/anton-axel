import * as path from "path"

export const onCreateWebpackConfig = ({ actions }:any) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
            "@/hooks": path.resolve(__dirname, "src/hooks"), // Add this line
        "@/lib": path.resolve(__dirname, "src/lib"), // Add this for completeness
        "@/ui": path.resolve(__dirname, "src/components/ui"), // Add this for completeness
      },
    },
  })
}
