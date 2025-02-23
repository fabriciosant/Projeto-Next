import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        if(!credentials){
          return null
        }

        if(credentials.email === "fabricio@gmail.com" && credentials.password ==="123456"){
          return{
            id: "1",
            name: "Fabricio",
            email: "fabricio@gmail.com"
          }
        }
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST }