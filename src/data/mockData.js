export const mockApiKeys = [
  {
    id: '1',
    name: 'ai_inference_key',
    key: 'a1b2...x9yz',
    status: 'active',
    expires: '2026-06-18',
    created: '2026-03-04',
    lastUsed: null,
  },
  {
    id: '2',
    name: 'model_training_key',
    key: 'c3d4...w8vu',
    status: 'active',
    expires: '2026-06-16',
    created: '2026-03-31',
    lastUsed: '7 hours ago',
  },
  {
    id: '3',
    name: 'vision_model_key',
    key: 'e5f6...t7rs',
    status: 'expired',
    expires: null,
    created: '2026-03-25',
    lastUsed: '2 days ago',
  },
  {
    id: '4',
    name: 'vision_model_key_v1',
    key: 'g7h8...q6po',
    status: 'expired',
    expires: null,
    created: '2026-03-05',
    lastUsed: '13 days ago',
  },
]

export const mockUser = {
  initials: 'RG',
  balance: '$145.20',
}
