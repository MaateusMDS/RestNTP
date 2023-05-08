export default {
  async createUser(request: Request, response: Response){
    try {
        const {name, email} = request.body;
        const userExist = await
    } catch (err) {
      return response.json({message: err.message});
    }
  }
};