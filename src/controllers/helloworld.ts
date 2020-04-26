import { getDB } from '../db';
import { Text } from '../models/Text';

interface IHelloWorldRequest {
  name: string
}

interface IHelloWorldResponse {
  text?: string;
  error?: string;
}

export async function HelloWorld (req: IHelloWorldRequest): Promise<IHelloWorldResponse> {
  const db = await getDB();
  const textRepo = db.getRepository(Text)

  const { name } = req;
  const matchText = new Text();
  matchText.name = name;
  try {
    const match = await textRepo.findOneOrFail(matchText);
    return { text: match.text };
  } catch (e) {
    return { error: 'Text with given name not found.'}
  }
}