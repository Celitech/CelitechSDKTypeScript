import { ContentType } from '../types';

export function getContentTypeDefinition(contentType: string): ContentType {
  const ct = contentType.toLowerCase();

  if (ct.startsWith('application/') && ct.includes('xml')) {
    return ContentType.Xml;
  }

  if (ct === 'application/x-www-form-urlencoded') {
    return ContentType.FormUrlEncoded;
  }

  if (ct === 'text/event-stream') {
    return ContentType.EventStream;
  }

  if (ct.startsWith('text/')) {
    return ContentType.Text;
  }

  if (ct.startsWith('image/')) {
    return ContentType.Image;
  }

  if (ct === 'application/octet-stream' || ct === 'application/pdf') {
    return ContentType.Binary;
  }

  if (ct === 'application/json') {
    return ContentType.Json;
  }

  return ContentType.Json;
}
