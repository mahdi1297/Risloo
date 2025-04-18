// app/api/centers/route.ts
import { NextResponse } from 'next/server';
import { getParams } from '@/utils/getParams';
import { getFileContent } from '@/utils/getFileContent';

const JSON_FILE_PATH = ['public', 'data', 'Risloo-Center-Sample.json']

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const { page, limit } = getParams(searchParams)
        console.log({page, limit})

        const fileData = await getFileContent(JSON_FILE_PATH);

        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const paginatedData = fileData.slice(startIndex, endIndex);
        const totalPages = Math.ceil(fileData.length / limit);

        return NextResponse.json({
            data: paginatedData,
            currentPage: page,
            totalPages,
            hasMore: page < totalPages
        });

    } catch (error) {
        console.error('Error reading JSON file:', error);
        
        return NextResponse.json(
            { error: 'Failed to load centers data' },
            { status: 500 }
        );
    }
}