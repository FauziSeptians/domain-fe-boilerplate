import { userSchema } from '@/domains/auth/validators/user';
import z from 'zod';

export type User = z.infer<typeof userSchema>;
